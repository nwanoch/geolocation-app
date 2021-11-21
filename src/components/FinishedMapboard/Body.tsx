import { IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import MapGL, {
  Source,
  Layer,
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import locate from "../../../images/locate.png";
function Body({ data }) {
  const [lat, setlat] = useState(3);
  const [long, setlong] = useState(5);

  const datas = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-67.13734, 45.13745],
          [-66.96466, 44.8097],
          [-68.03252, 44.3252],
          [-69.06, 43.98],
          [-70.11617, 43.68405],
          [-70.64573, 43.09008],
          [-70.75102, 43.08003],
          [-70.79761, 43.21973],
          [-70.98176, 43.36789],
          [-70.94416, 43.46633],
          [-71.08482, 45.30524],
          [-70.66002, 45.46022],
          [-70.30495, 45.91479],
          [-70.00014, 46.69317],
          [-69.23708, 47.44777],
          [-68.90478, 47.18479],
          [-68.2343, 47.35462],
          [-67.79035, 47.06624],
          [-67.79141, 45.70258],
          [-67.13734, 45.13745],
        ],
      ],
    },
  };
  const getLocation = () => {
    console.log(data);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
      }
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    zoom: 5,
  });

  // };
  return (
    <div
      style={{
        height: "90vh",
        width: "100vw",
      }}
    >
      <MapGL
        style={{
          width: "100%",
          height: "100vh ",
          border: "0",
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={
          "pk.eyJ1IjoiZW1tYW51ZWxud2Fub2NoaWUiLCJhIjoiY2t0bGozd2YwMDJpcjJ1czh2aHVscmk1eCJ9.XlprBONdRkZdwS4NYdKbGw"
        }
        latitude={45.13745}
        longitude={-67.13734}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        <Source id="maine" type="geojson" data={datas} />
        <Layer
          id="maine"
          type="fill"
          source="maine"
          paint={{
            "fill-color": "#E88530",
            "fill-opacity": 0.7,
          }}
        />
        <Layer
          id="maine"
          type="line"
          source="maine"
          paint={{
            "line-width": 8,
            "line-color": "#FF9A00",
          }}
        />
        <GeolocateControl
          position="top-right"
          trackUserLocation={true}
          showUserHeading={true}
        />
        <NavigationControl showCompass showZoom position="top-right" />
      </MapGL>
      <button
        onClick={getLocation}
        style={{
          // backgroundColor: "#E88530",
          border: " 3px solid #E88530",
          color: "#E88530",
          padding: "14px 40px",
          position: "absolute",
          bottom: "100px",
          left: "50%",
          fontSize: "12px",
          transform: "translateX(-50%)",
          zIndex: 4555,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "25px",
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Body;
