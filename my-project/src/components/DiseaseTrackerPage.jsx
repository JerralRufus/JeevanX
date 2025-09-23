import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "./NavBar";
import Footer from "./Footer";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const DiseaseTrackerPage = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const [diseaseData, setDiseaseData] = useState([
    { city: "Mumbai", value: 50, disease: "Dengue" },
    { city: "Delhi", value: 30, disease: "Malaria" },
    { city: "Bangalore", value: 70, disease: "COVID-19" },
    { city: "Chennai", value: 45, disease: "Typhoid" },
    { city: "Kolkata", value: 65, disease: "Chikungunya" },
    { city: "Hyderabad", value: 25, disease: "Common Cold" },
    { city: "Mumbai", value: 80, disease: "Flu" },
    { city: "Chennai", value: 75, disease: "Zika" },
    { city: "Paris", value: 55, disease: "Influenza" },
    { city: "Lucknow", value: 60, disease: "Dengue" },
    { city: "London", value: 35, disease: "Common Cold" },
  ]);

  const getColor = (value) => {
    if (value >= 75) return "#DC2626";
    if (value >= 60) return "#EA580C";
    if (value >= 40) return "#FACC15";
    if (value >= 20) return "#84CC16";
    return "#22C55E";
  };

  const getSeverityLabel = (value) => {
    if (value >= 75) return "Critical";
    if (value >= 60) return "Very High";
    if (value >= 40) return "High";
    if (value >= 20) return "Medium";
    return "Low";
  };

  const getCoords = async (cityName) => {
    try {
      const response = await fetch(
        `http://localhost:5000/geocode?city=${encodeURIComponent(cityName)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
    } catch (err) {
      console.error(`Error fetching coordinates for ${cityName}:`, err);
    }
    return null;
  };

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current).setView([22.9734, 78.6569], 5);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const legend = L.control({ position: "bottomright" });
      legend.onAdd = function () {
        const div = L.DomUtil.create(
          "div",
          "info legend bg-white p-3 rounded-lg shadow-xl border border-gray-200 text-sm font-sans"
        );
        div.innerHTML = `
          <h4 class="font-bold text-gray-800 text-lg mb-3 border-b border-gray-200 pb-2">Severity Index</h4>
          <div class="flex items-center mb-2">
            <span style="background:#DC2626;" class="w-4 h-4 rounded-full mr-3 shadow-sm"></span> <span class="text-gray-700 font-medium">> 75 (Critical)</span>
          </div>
          <div class="flex items-center mb-2">
            <span style="background:#EA580C;" class="w-4 h-4 rounded-full mr-3 shadow-sm"></span> <span class="text-gray-700 font-medium">60-74 (Very High)</span>
          </div>
          <div class="flex items-center mb-2">
            <span style="background:#FACC15;" class="w-4 h-4 rounded-full mr-3 shadow-sm"></span> <span class="text-gray-700 font-medium">40-59 (High)</span>
          </div>
          <div class="flex items-center mb-2">
            <span style="background:#84CC16;" class="w-4 h-4 rounded-full mr-3 shadow-sm"></span> <span class="text-gray-700 font-medium">20-39 (Medium)</span>
          </div>
          <div class="flex items-center">
            <span style="background:#22C55E;" class="w-4 h-4 rounded-full mr-3 shadow-sm"></span> <span class="text-gray-700 font-medium">< 20 (Low)</span>
          </div>
        `;
        return div;
      };
      legend.addTo(map);
    }
  }, []);

  useEffect(() => {
    const plotCities = async () => {
      const map = mapInstanceRef.current;
      if (!map) return;

      // Remove old markers
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
      });

      const aggregatedCityData = {};
      for (const entry of diseaseData) {
        if (!aggregatedCityData[entry.city]) {
          aggregatedCityData[entry.city] = {
            highestValue: 0,
            diseases: [],
            coords: null,
          };
        }
        aggregatedCityData[entry.city].diseases.push({
          name: entry.disease,
          value: entry.value,
        });
        if (entry.value > aggregatedCityData[entry.city].highestValue) {
          aggregatedCityData[entry.city].highestValue = entry.value;
        }
      }

      for (const cityName in aggregatedCityData) {
        const cityInfo = aggregatedCityData[cityName];
        if (!cityInfo.coords) {
          cityInfo.coords = await getCoords(cityName);
        }

        if (cityInfo.coords) {
          const markerColor = getColor(cityInfo.highestValue);
          const severityLabel = getSeverityLabel(cityInfo.highestValue);

          const sortedDiseases = cityInfo.diseases.sort(
            (a, b) => b.value - a.value
          );

          const popupContent = `
            <div class="font-sans text-gray-800 p-2">
              <h3 class="text-xl font-bold mb-2 text-blue-700 border-b border-gray-200 pb-2">${cityName}</h3>
              <p class="text-md mb-2"><span class="font-semibold">Overall Severity:</span>
                <span style="color:${markerColor};" class="font-bold">${severityLabel} (${
            cityInfo.highestValue
          })</span>
              </p>
              <p class="text-md font-semibold mb-1">Reported Diseases:</p>
              <ul class="list-disc list-inside text-sm pl-2 space-y-0.5">
                ${sortedDiseases
                  .map(
                    (d) => `<li class="${
                      d.value === cityInfo.highestValue
                        ? "font-bold text-red-600"
                        : "text-gray-700"
                    }">
                    ${d.name}: <span style="color:${getColor(d.value)};">${
                      d.value
                    }</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
          `;

          // Custom pin icon
          const pinIcon = L.divIcon({
            className: "custom-pin",
            html: `<div style="
              width: 24px;
              height: 24px;
              background: ${markerColor};
              border: 2px solid #333;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 24],
          });

          const marker = L.marker(cityInfo.coords, { icon: pinIcon }).addTo(
            map
          );

          // Bind popup to marker for hover effect
          marker.bindPopup(popupContent, {
            closeButton: false,
            autoClose: false,
            closeOnClick: false,
            offset: [0, -24],
          });

          marker.on("mouseover", function () {
            this.openPopup();
          });
          marker.on("mouseout", function () {
            this.closePopup();
          });
        }
      }
    };

    plotCities();
  }, [diseaseData]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <div className="fixed top-0 left-0 w-full z-50 shadow-lg">
        <Navbar />
      </div>

      <main className="flex-grow p-4 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 mt-[72px] relative z-0">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight text-blue-800 drop-shadow-md">
            Global Disease Tracker Heatmap
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            Explore real-time disease trends and outbreak alerts across various
            regions. Hover on a pin for detailed information on specific
            diseases and their severity.
          </p>
          <div
            id="map-container"
            className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-blue-200"
            style={{ width: "100%", height: "650px" }}
          >
            <div ref={mapContainerRef} id="map" className="w-full h-full" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseTrackerPage;
