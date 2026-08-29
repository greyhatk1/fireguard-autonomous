export type Coordinate = { latitude: number; longitude: number };

export type GeoPolygon = { coordinates: Coordinate[] };

export type Property = {
  id: string;
  name: string;
  boundary: GeoPolygon;
  status: "active" | "inactive";
  createdAt: string;
};

export type ZoneType = "vegetation" | "structure" | "road" | "restricted" | "charging" | "other";

export type Zone = {
  id: string;
  propertyId: string;
  geometry: GeoPolygon;
  zoneType: ZoneType;
  attributes: Record<string, unknown>;
};
