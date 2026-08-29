export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type RiskInput = {
  vegetationDensity: number;
  dryness: number;
  vegetationHeight: number;
  structureProximity: number;
  terrainExposure: number;
};

export type RiskAssessment = {
  score: number;
  level: RiskLevel;
  factors: string[];
  recommendation: "MONITOR" | "INSPECT" | "TREAT_AND_VERIFY";
};

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function assessRisk(input: RiskInput): RiskAssessment {
  const density = clamp(input.vegetationDensity);
  const dryness = clamp(input.dryness);
  const height = clamp(input.vegetationHeight);
  const proximity = clamp(input.structureProximity);
  const terrain = clamp(input.terrainExposure);

  const weighted =
    density * 0.28 +
    dryness * 0.28 +
    height * 0.16 +
    proximity * 0.18 +
    terrain * 0.10;

  const score = Number((weighted * 100).toFixed(2));
  const level: RiskLevel = score >= 80 ? "CRITICAL" : score >= 60 ? "HIGH" : score >= 30 ? "MEDIUM" : "LOW";

  const factors: string[] = [];
  if (density >= 0.7) factors.push("dense vegetation");
  if (dryness >= 0.7) factors.push("high dryness");
  if (height >= 0.7) factors.push("tall vegetation");
  if (proximity >= 0.7) factors.push("close to structures");
  if (terrain >= 0.7) factors.push("elevated terrain exposure");

  const recommendation = level === "CRITICAL" || level === "HIGH"
    ? "TREAT_AND_VERIFY"
    : level === "MEDIUM" ? "INSPECT" : "MONITOR";

  return { score, level, factors, recommendation };
}
