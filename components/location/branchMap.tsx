// "use client";
// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useEffect } from "react";

// // Use local paths or Data URIs. 
// // TIP: Download these two files and put them in your /public folder.
// const icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", 
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// function MapEvents({ setCoords }: { setCoords: (coords: L.LatLng) => void }) {
//   useMapEvents({
//     click(e) {
//       setCoords(e.latlng);
//     },
//   });
//   return null;
// }

// function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
//   const map = useMap();
//   useEffect(() => {
//     if (lat && lng) {
//       const center = map.getCenter();
//       // PERFORMANCE: Use setView with animate: false for the best Lighthouse TBT score.
//       // flyTo is very heavy on the CPU.
//       if (center.lat !== lat || center.lng !== lng) {
//         map.setView([lat, lng], map.getZoom(), { animate: false });
//       }
//     }
//   }, [lat, lng, map]);
//   return null;
// }

// export default function BranchMap({ setCoords, lat, lng }: any) {
//   const position: [number, number] = [lat || 22.7668, lng || 88.3792];

//   return (
//     <div className="h-full w-full" style={{ contentVisibility: 'auto' }}>
//       <MapContainer 
//         center={position} 
//         zoom={13} 
//         className="h-full w-full" 
//         zoomControl={false}
//         scrollWheelZoom={false}
//         dragging={true}
//       >
//         <TileLayer 
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           keepBuffer={2} 
//         />
//         <Marker position={position} icon={icon} />
//         <MapEvents setCoords={setCoords} />
//         <RecenterMap lat={lat} lng={lng} />
//       </MapContainer>
//     </div>
//   );
// }


"use client";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", 
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapEvents({ setCoords }: { setCoords: (coords: L.LatLng) => void }) {
  useMapEvents({
    click(e) {
      setCoords(e.latlng);
    },
  });
  return null;
}

function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      const center = map.getCenter();
      if (center.lat !== lat || center.lng !== lng) {
        map.setView([lat, lng], map.getZoom(), { animate: false });
      }
    }
  }, [lat, lng, map]);
  return null;
}

export default function BranchMap({ setCoords, lat, lng }: any) {
  const position: [number, number] = [lat || 22.7668, lng || 88.3792];

  return (
    <div className="h-full w-full" style={{ contentVisibility: 'auto' }}>
      <MapContainer 
        center={position} 
        zoom={13} 
        className="h-full w-full" 
        zoomControl={true}      
        scrollWheelZoom={true}  // FIXED: Changed from false to true
        doubleClickZoom={true}  // Added for better UX
        dragging={true}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          keepBuffer={2} 
        />
        <Marker position={position} icon={icon} />
        <MapEvents setCoords={setCoords} />
        <RecenterMap lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}