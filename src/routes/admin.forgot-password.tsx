import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import emailjs from "@emailjs/browser";
import { verifyAdminEmail, resetAdminPassword } from "@/lib/reset-admin-password.functions";

export const Route = createFileRoute("/admin/forgot-password")({
  head: () => ({ meta: [{ title: "Reset Admin Password — Grain Crumbs" }, { name: "robots", content: "noindex" }] }),
  component: ForgotPassword,
});

const OTP_RECIPIENT_EMAIL = "ankita.junankar@gmail.com";
const EMAILJS_SERVICE_ID = "service_uzxszot";
const EMAILJS_TEMPLATE_ID = "template_9mm79jb";
const EMAILJS_PUBLIC_KEY = "FVFudd1L2Yxx2YziQ";
const OTP_TTL_MS = 10 * 60 * 1000;

type Step = "email" | "otp" | "password" | "done";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function ForgotPassword() {
  const navigate = useNavigate();
  const verifyEmail = useServerFn(verifyAdminEmail);
  const resetPassword = useServerFn(resetAdminPassword);

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState(0);
  const [otpInput, setOtpInput] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setInfo(null); setBusy(true);
    try {
      await verifyEmail({ data: { email: email.trim().toLowerCase() } });
      const code = generateOtp();
      const expiresAt = Date.now() + OTP_TTL_MS;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: OTP_RECIPIENT_EMAIL,
          customer_name: "Ankita",
          order_number: code,
          product_type: "Admin Password Reset — Verification Code",
          delivery: `Use this 6-digit code to reset your admin password.`,
          date_required: new Date(expiresAt).toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setOtp(code);
      setOtpExpiresAt(expiresAt);
      setStep("otp");
      setInfo(`Verification code sent to ${OTP_RECIPIENT_EMAIL}. Expires in 10 minutes.`);
    } catch (err: any) {
      setError(err?.message ?? "Could not start password reset.");
    } finally {
      setBusy(false);
    }
  };

  const verifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setInfo(null);
    if (!otp) return setError("No code was sent. Start over.");
    if (Date.now() > otpExpiresAt) {
      setStep("email"); setOtp(null);
      return setError("Verification code expired. Please request a new one.");
    }
    if (otpInput.trim() !== otp) return setError("Incorrect verification code.");
    setStep("password");
  };

  const submitNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setInfo(null);
    if (newPw.length < 8) return setError("Password must be at least 8 characters.");
    if (newPw.length > 72) return setError("Password must be 72 characters or fewer.");
    if (newPw !== confirmPw) return setError("Passwords do not match.");
    setBusy(true);
    try {
      await resetPassword({ data: { email: email.trim().toLowerCase(), newPassword: newPw } });
      setStep("done");
      setOtp(null); setOtpInput(""); setNewPw(""); setConfirmPw("");
    } catch (err: any) {
      setError(err?.message ?? "Could not update password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="section">
      <div className="container-prose max-w-xl">
        <Link to="/admin/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
        <div className="mt-6">
          <p className="divider-gold eyebrow">Admin</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Reset Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            A 6-digit verification code will be sent to <span className="font-medium">{OTP_RECIPIENT_EMAIL}</span>.
          </p>
        </div>

        {error && <div className="mt-6 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900">{error}</div>}
        {info && <div className="mt-6 rounded-md border border-[color:var(--gold)] bg-[color:var(--cream-dark)]/40 px-4 py-3 text-sm">{info}</div>}

        {step === "email" && (
          <form onSubmit={sendOtp} className="mt-8 space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <Field label="Admin email" type="email" value={email} onChange={setEmail} autoComplete="email" required />
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send verification code"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={verifyOtp} className="mt-8 space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <Field
              label="6-digit verification code"
              type="text"
              value={otpInput}
              onChange={(v) => setOtpInput(v.replace(/\D/g, "").slice(0, 6))}
              autoComplete="one-time-code"
              required
            />
            <button type="submit" className="btn-primary w-full justify-center">Verify code</button>
          </form>
        )}

        {step === "password" && (
          <form onSubmit={submitNewPassword} className="mt-8 space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <Field label="New password" type="password" value={newPw} onChange={setNewPw} autoComplete="new-password" required />
            <Field label="Confirm new password" type="password" value={confirmPw} onChange={setConfirmPw} autoComplete="new-password" required />
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Update password"}
            </button>
          </form>
        )}

        {step === "done" && (
          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--gold)] bg-[color:var(--cream-dark)]/40 p-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
            <h2 className="mt-4 font-display text-2xl">Password updated</h2>
            <p className="mt-2 text-sm text-muted-foreground">You can now sign in with your new password.</p>
            <button onClick={() => navigate({ to: "/admin/login" })} className="btn-primary mt-6 inline-flex">
              Go to sign in
            </button>
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
