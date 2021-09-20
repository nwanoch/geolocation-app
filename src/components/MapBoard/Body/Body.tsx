import { IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import locate from "../../../images/locate.png";
function Body() {
  const [location, setLocation] = useState<any>([]);
  const [lat, setlat] = useState(3);
  const [long, setlong] = useState(5);

  const getLocation = () => {
    console.log("location getter ran");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([
          ...location,
          [position.coords.longitude, position.coords.latitude],
        ]);
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
        console.log(location);
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
    latitude: 45.13745,
    longitude: -67.13734,
    zoom: 5,
  });

  //to test it out on the go follow the following sets

  // 1. set longitude and latitude with long and lat states respectivey
  // 2. uncomment  {location} and comment out the set of coordinates before {locaion} finish
  // it is set to display the data
  const data = {
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

        // { location },
      ],
    },
  };
  return (
    <div
      style={{
        height: "90vh",
        width: "100vw",
      }}
    >
      <MapGL
        style={{
          width: "100vw",
          height: "100%",
          border: "0",
          position: "absolute",
          zIndex: -50,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={
          "pk.eyJ1IjoiZW1tYW51ZWxud2Fub2NoaWUiLCJhIjoiY2t0bGozd2YwMDJpcjJ1czh2aHVscmk1eCJ9.XlprBONdRkZdwS4NYdKbGw"
        }
        onViewportChange={setViewport}
        {...viewport}
      >
        <Source id="maine" type="geojson" data={data} />
        <Layer
          id="maine"
          type="fill"
          source="maine"
          paint={{
            "fill-color": "#E88530",
            "fill-opacity": 1,
          }}
        />
        <Layer
          id="maine"
          type="line"
          source="maine"
          paint={{
            "line-width": 4,
            "line-color": "#FF9A00",
          }}
        />
      </MapGL>
      <button
        onClick={getLocation}
        style={{
          backgroundColor: "#E88530",
          color: "#fff",
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
        <img src={locate} alt="" style={{ marginRight: "5px" }} />
        Pick Location
      </button>
    </div>
  );
}

export default Body;
