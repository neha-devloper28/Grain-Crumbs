import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/change-password")({
  head: () => ({ meta: [{ title: "Change Password — Grain Crumbs Admin" }, { name: "robots", content: "noindex" }] }),
  component: ChangePassword,
});

const ADMIN_NOTIFY_EMAIL = "thegraincrumbs@gmail.com";
const OTP_RECIPIENT_EMAIL = "ankita.junankar@gmail.com";
const EMAILJS_SERVICE_ID = "service_uzxszot";
const EMAILJS_TEMPLATE_ID = "template_9mm79jb";
const EMAILJS_PUBLIC_KEY = "FVFudd1L2Yxx2YziQ";
const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes

type Step = "form" | "verify" | "done";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function ChangePassword() {
  const navigate = useNavigate();
  const [bootstrapping, setBootstrapping] = useState(true);
  const [userEmail, setUserEmail] = useState<string>("");

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const [step, setStep] = useState<Step>("form");
  const [sentOtp, setSentOtp] = useState<string | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState<number>(0);
  const [otpInput, setOtpInput] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/admin/login" });
        return;
      }
      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sess.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!roleRow) {
        await supabase.auth.signOut();
        navigate({ to: "/admin/login" });
        return;
      }
      setUserEmail(sess.session.user.email ?? "");
      setBootstrapping(false);
    })();
  }, [navigate]);

  const requestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (next.length < 8) return setError("New password must be at least 8 characters.");
    if (next.length > 72) return setError("New password must be 72 characters or fewer.");
    if (next !== confirm) return setError("New password and confirmation do not match.");
    if (next === current) return setError("New password must be different from the current password.");

    setBusy(true);
    try {
      // Verify current password by re-authenticating
      const { error: reauthErr } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: current,
      });
      if (reauthErr) {
        setBusy(false);
        return setError("Current password is incorrect.");
      }

      const otp = generateOtp();
      const expiresAt = Date.now() + OTP_TTL_MS;

      // 1) Security alert to the business inbox (no OTP)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: ADMIN_NOTIFY_EMAIL,
          customer_name: "Grain Crumbs Team",
          order_number: "—",
          product_type: "Security Alert: Admin Password Change Attempt",
          delivery: `Someone is attempting to change the admin password for ${userEmail}. If this wasn't you, please secure the account immediately.`,
          date_required: new Date().toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      // 2) OTP sent only to the owner's personal inbox
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: OTP_RECIPIENT_EMAIL,
          customer_name: "Ankita",
          order_number: otp,
          product_type: "Admin Password Change — Verification Code",
          delivery: `Use this 6-digit code to confirm the password change for ${userEmail}.`,
          date_required: new Date(expiresAt).toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setSentOtp(otp);
      setOtpExpiresAt(expiresAt);
      setStep("verify");
      setInfo(`Verification code sent to ${OTP_RECIPIENT_EMAIL}. It expires in 10 minutes.`);
    } catch (err) {
      console.error("OTP send failed", err);
      setError("Could not send verification email. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const verifyAndUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!sentOtp) return setError("No code was sent. Start over.");
    if (Date.now() > otpExpiresAt) {
      setStep("form");
      setSentOtp(null);
      return setError("Verification code expired. Please request a new one.");
    }
    if (otpInput.trim() !== sentOtp) return setError("Incorrect verification code.");

    setBusy(true);
    try {
      const { error: updErr } = await supabase.auth.updateUser({ password: next });
      if (updErr) {
        setBusy(false);
        return setError(updErr.message);
      }
      setStep("done");
      setSentOtp(null);
      setOtpInput("");
      setCurrent("");
      setNext("");
      setConfirm("");
    } catch (err) {
      console.error("Password update failed", err);
      setError("Could not update password. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const resendOtp = async () => {
    if (!sentOtp) return;
    setBusy(true);
    setError(null);
    try {
      const otp = generateOtp();
      const expiresAt = Date.now() + OTP_TTL_MS;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: OTP_RECIPIENT_EMAIL,
          customer_name: "Ankita",
          order_number: otp,
          product_type: "Admin Password Change — Verification Code (resent)",
          delivery: `Use this 6-digit code to confirm the password change for ${userEmail}.`,
          date_required: new Date(expiresAt).toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSentOtp(otp);
      setOtpExpiresAt(expiresAt);
      setInfo(`A new code was sent to ${OTP_RECIPIENT_EMAIL}.`);
    } catch (err) {
      console.error("Resend failed", err);
      setError("Could not resend code.");
    } finally {
      setBusy(false);
    }
  };

  if (bootstrapping) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container-prose max-w-xl">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to dashboard
        </Link>
        <div className="mt-6">
          <p className="divider-gold eyebrow">Admin</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Change Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Signed in as <span className="font-medium">{userEmail}</span>. A security alert will be sent to{" "}
            <span className="font-medium">{ADMIN_NOTIFY_EMAIL}</span> and the verification code will be sent to{" "}
            <span className="font-medium">{OTP_RECIPIENT_EMAIL}</span>.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900">{error}</div>
        )}
        {info && (
          <div className="mt-6 rounded-md border border-[color:var(--gold)] bg-[color:var(--cream-dark)]/40 px-4 py-3 text-sm">
            {info}
          </div>
        )}

        {step === "form" && (
          <form onSubmit={requestOtp} className="mt-8 space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <Field label="Current Password" type="password" value={current} onChange={setCurrent} autoComplete="current-password" required />
            <Field label="New Password" type="password" value={next} onChange={setNext} autoComplete="new-password" required />
            <Field label="Confirm New Password" type="password" value={confirm} onChange={setConfirm} autoComplete="new-password" required />
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Send verification code</>}
            </button>
          </form>
        )}

        {step === "verify" && (
          <form onSubmit={verifyAndUpdate} className="mt-8 space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <Field
              label="6-digit verification code"
              type="text"
              value={otpInput}
              onChange={(v) => setOtpInput(v.replace(/\D/g, "").slice(0, 6))}
              autoComplete="one-time-code"
              required
            />
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify & update password"}
            </button>
            <button type="button" onClick={resendOtp} disabled={busy} className="w-full text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
              Resend code
            </button>
          </form>
        )}

        {step === "done" && (
          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--gold)] bg-[color:var(--cream-dark)]/40 p-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
            <h2 className="mt-4 font-display text-2xl">Password updated</h2>
            <p className="mt-2 text-sm text-muted-foreground">Your admin password has been changed successfully.</p>
            <Link to="/admin" className="btn-primary mt-6 inline-flex">Back to dashboard</Link>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({
  label, type, value, onChange, autoComplete, required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
      />
    </label>
  );
}
