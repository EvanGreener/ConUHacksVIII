import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { LatLngExpression } from "leaflet";

const Markers = ({ crimes }: { crimes: Array<[string, number, number]> }) => {
  return (
    <>
      {crimes.map((crime, index) => (
        <Marker key={index} position={[crime[2], crime[1]]}>
          <Popup>{crime[0]}</Popup>
        </Marker>
      ))}
    </>
  );
};

const Map = () => {
  /**
   * Represents an array of crimes.
   * Each crime is an array containing the crime name (string), latitude (number), and longitude (number).
   */
  const [crimes, setCrimes] = useState<Array<[string, number, number]>>([]);

  const position: LatLngExpression = [45.495573, -73.578937];

  useEffect(() => {
    async function getCrimes() {
      const response = await fetch("http://localhost:4000/api/get-statistics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: "", // replace with your start date
          endDate: "", // replace with your end date
        }),
      });
      const data = await response.json();
      setCrimes(data.slice(0, 100)); // Limit to the first 100 crimes
    }

    getCrimes();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "800px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers crimes={crimes} />
    </MapContainer>
  );
};

export default Map;
