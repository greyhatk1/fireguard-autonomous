import type { GeoPolygon } from "./models";

export function validatePolygon(polygon: GeoPolygon): void {
  if (polygon.coordinates.length < 3) {
    throw new Error("A polygon requires at least three coordinates");
  }

  for (const point of polygon.coordinates) {
    if (!Number.isFinite(point.latitude) || !Number.isFinite(point.longitude)) {
      throw new Error("Polygon coordinates must be finite numbers");
    }
    if (point.latitude < -90 || point.latitude > 90) {
      throw new Error("Latitude must be between -90 and 90");
    }
    if (point.longitude < -180 || point.longitude > 180) {
      throw new Error("Longitude must be between -180 and 180");
    }
  }
}
