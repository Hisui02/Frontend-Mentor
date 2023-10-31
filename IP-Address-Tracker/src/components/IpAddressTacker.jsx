import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./IpAddresTracker.module.css";
import "./mapStyles.css";
import { Icon } from "leaflet";

export default function IpAddressTracker() {
  const [datos, setDatos] = useState({
    ip: "-",
    city: "-",
    timezone: "-",
    isp: "-",
  });

  const [ub, setUb] = useState({ lat: 0, lng: 0 });

  const refip = useRef();

  const fetchdata = () => {
    const inputip = refip.current.value;
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_dR0C8iRhBdLLfCsAc0wZ5FnU2mgH3&ipAddress=" +
        inputip
    )
      .then((response) => response.json())
      .then((data) => {
        const tempdata = {
          ip: data.ip,
          city:
            data.location.city +
            ", " +
            data.location.region +
            " " +
            data.location.postalcode,
          timezone: data.location.timezone,
          isp: data.isp,
        };
        setDatos(tempdata);
        const tempub = { lat: data.location.lat, lng: data.location.lng };
        setUb(tempub);
      });
  };

  const customIcon = new Icon({
    iconUrl: require("./map-icon.png"),
    iconSize: [38, 38],
  });

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>IP Address Tracker</h1>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            ref={refip}
          />
          <button onClick={fetchdata}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.data}>
        <div>
          <h4>IP ADDRESS</h4>
          <h2>{datos.ip}</h2>
        </div>
        <div className={styles.separator}></div>
        <div>
          <h4>LOCATION</h4>
          <h2>{datos.city}</h2>
        </div>
        <div className={styles.separator}></div>
        <div>
          <h4>TIMEZONE</h4>
          <h2>{datos.timezone}</h2>
        </div>
        <div className={styles.separator}></div>
        <div>
          <h4>ISP</h4>
          <h2>{datos.isp}</h2>
        </div>
      </div>

      <div style={{ height: "66.6%", width: "100%" }}>
        <MapContainer
          key={JSON.stringify([ub.lat, ub.lng])}
          center={[ub.lat, ub.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[ub.lat, ub.lng]} icon={customIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
