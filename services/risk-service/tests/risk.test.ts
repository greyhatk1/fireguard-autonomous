import { describe, expect, it } from "vitest";
import { assessRisk } from "../src/risk";

describe("assessRisk", () => {
  it("classifies a low-input zone as LOW", () => {
    const result = assessRisk({ vegetationDensity: 0, dryness: 0, vegetationHeight: 0, structureProximity: 0, terrainExposure: 0 });
    expect(result.score).toBe(0);
    expect(result.level).toBe("LOW");
    expect(result.recommendation).toBe("MONITOR");
  });

  it("classifies a high-risk zone and explains contributing factors", () => {
    const result = assessRisk({ vegetationDensity: 1, dryness: 1, vegetationHeight: 0.8, structureProximity: 0.9, terrainExposure: 0.7 });
    expect(result.level).toBe("CRITICAL");
    expect(result.recommendation).toBe("TREAT_AND_VERIFY");
    expect(result.factors.length).toBeGreaterThanOrEqual(4);
  });

  it("clamps out-of-range inputs", () => {
    const result = assessRisk({ vegetationDensity: 2, dryness: -1, vegetationHeight: 0, structureProximity: 0, terrainExposure: 0 });
    expect(result.score).toBe(28);
  });
});
