import "./App.css";
import IpAddressTracker from "./components/IpAddressTacker";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function App() {
  return <IpAddressTracker />;
  // return (
  //   <div style={{ height: "100vh", width: "100%" }}>
  //     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       {/* <Marker position={[51.505, -0.09]}>
  //         <Popup>
  //           A pretty CSS3 popup. <br /> Easily customizable.
  //         </Popup>
  //       </Marker> */}
  //     </MapContainer>
  //   </div>
  // );
}

export default App;
