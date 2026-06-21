// Approx distance (km) from Kharadi 411014 to common Pune pincodes.
// Used only for a tentative delivery cost estimate shown in the Order form.
const PINCODE_DISTANCE_KM: Record<string, number> = {
  // Kharadi & adjacent
  "411014": 0,
  "411036": 3,   // Wagholi side
  "412207": 6,   // Wagholi
  "411015": 4,   // Vishrantwadi
  "411006": 6,   // Yerwada
  "411032": 5,   // Vimannagar/Lohegaon
  "411047": 6,   // Lohegaon
  // Eastern belt
  "411013": 5,   // Hadapsar
  "411028": 7,   // Manjri
  "412308": 14,  // Loni Kalbhor
  // Central Pune
  "411001": 9,   // Pune Cantonment
  "411011": 10,  // Shivajinagar
  "411005": 10,  // Shivajinagar/Range Hills
  "411016": 11,  // Model Colony
  "411004": 12,  // Deccan
  "411002": 11,  // Budhwar Peth
  "411030": 12,  // Sadashiv Peth
  // South / South-East
  "411040": 9,   // NIBM / Kondhwa
  "411048": 10,  // Kondhwa
  "411022": 12,  // Katraj side
  "411046": 14,  // Dhankawadi
  "411043": 13,  // Ambegaon
  "411009": 13,  // Parvati
  // West / South-West
  "411038": 14,  // Kothrud
  "411029": 15,  // Erandwane
  "411052": 16,  // Karve Nagar
  "411021": 16,  // Baner / Pashan
  "411045": 14,  // Pashan
  "411007": 12,  // Aundh
  "411008": 13,  // Aundh
  // Far west / Hinjewadi / PCMC
  "411057": 18,  // Hinjewadi
  "411033": 19,  // Wakad
  "411027": 19,  // Pimple Saudagar
  "411017": 18,  // Pimpri
  "411018": 20,  // Chinchwad
  "411019": 22,  // Chinchwad
  "411044": 22,  // Nigdi
  "411026": 17,  // Bhosari
  "411039": 18,  // Dapodi
};

export type DeliveryEstimate =
  | { kind: "ok"; km: number; label: string; charge: string }
  | { kind: "quote"; km: number; label: string }
  | { kind: "unknown" }
  | { kind: "invalid" };

export function estimateDelivery(pincodeRaw: string): DeliveryEstimate {
  const pin = pincodeRaw.trim();
  if (!/^\d{6}$/.test(pin)) return { kind: "invalid" };

  const km = PINCODE_DISTANCE_KM[pin];
  if (km === undefined) return { kind: "unknown" };

  if (km <= 5) return { kind: "ok", km, label: "0–5 km", charge: "₹50" };
  if (km <= 10) return { kind: "ok", km, label: "5–10 km", charge: "₹80" };
  if (km <= 15) return { kind: "ok", km, label: "10–15 km", charge: "₹120" };
  if (km <= 20) return { kind: "ok", km, label: "15–20 km", charge: "₹180" };
  return { kind: "quote", km, label: "20+ km" };
}
