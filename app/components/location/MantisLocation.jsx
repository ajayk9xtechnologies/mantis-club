// app/components/location/MantisLocation.jsx
"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import Leaflet components (SSR-safe)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.MapContainer })),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.TileLayer })),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.Marker })),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => ({ default: mod.Popup })),
  { ssr: false }
);

import "leaflet/dist/leaflet.css"; // Safe to import here
import SectionTitle from "../SectionTitle";

// Fix Leaflet default markers (client-only)
const fixLeafletIcons = () => {
  if (typeof window !== "undefined") {
    import("leaflet").then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }
};

export default function MantisLocation() {
  const position = [25.2085919, 55.2765573]; // Mantis Dubai DIFC

  useEffect(() => {
    fixLeafletIcons();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={17}
      scrollWheelZoom={false} // Disable on desktop for better UX
      zoomControl={true}
      style={{ height: "100%", width: "100%", borderRadius: "1.5rem" }}
      className="rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="text-black font-semibold text-lg">
          <div>
            <h3 className="font-bold text-2xl mb-2 text-[#f8db98]">
              🍸 Mantis Dubai
            </h3>
            <p className="mb-2">Emirates Financial Towers</p>
            <p className="mb-4">Podium Level, DIFC</p>
            <a
              href="https://www.google.com/maps/place/Mantis+Dubai/@25.2085919,55.2765573,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#f8db98] text-black text-sm rounded-lg hover:bg-[#f8db98]/90 transition"
            >
              Open in Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
