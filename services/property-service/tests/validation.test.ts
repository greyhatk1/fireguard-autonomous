import { describe, expect, it } from "vitest";
import { validatePolygon } from "../src/validation";

describe("validatePolygon", () => {
  it("accepts a valid polygon", () => {
    expect(() => validatePolygon({ coordinates: [
      { latitude: 35, longitude: -119 },
      { latitude: 35.001, longitude: -119 },
      { latitude: 35.001, longitude: -118.999 },
    ] })).not.toThrow();
  });

  it("rejects fewer than three points", () => {
    expect(() => validatePolygon({ coordinates: [
      { latitude: 35, longitude: -119 },
      { latitude: 35.001, longitude: -119 },
    ] })).toThrow();
  });

  it("rejects invalid latitude", () => {
    expect(() => validatePolygon({ coordinates: [
      { latitude: 91, longitude: -119 },
      { latitude: 35, longitude: -119 },
      { latitude: 35, longitude: -118.999 },
    ] })).toThrow();
  });
});
