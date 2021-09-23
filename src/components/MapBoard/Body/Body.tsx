import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import MapGL, {
  Source,
  Layer,
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import locate from "../../../images/locate.png";
import { Link } from "react-router-dom";
function Body({ getLocation, location }) {
  const [lat, setlat] = useState(3);
  const [long, setlong] = useState(5);

  const getLlocation = () => {
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
    getLlocation();
  }, []);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    zoom: 5,
  });

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
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        <GeolocateControl
          position="top-right"
          trackUserLocation={true}
          showUserHeading={true}
        />
        <NavigationControl showCompass showZoom position="top-right" />
      </MapGL>
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "center",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "80vw",
            maxHeight: "300px",
            overflowY: "scroll",
            margin: "20px auto",
            backgroundColor: "#254159",
            textAlign: "left",
            opacity: 0.8,
            borderRadius: 10,
            color: "white",
            fontSize: "14px",
            fontFamily: "'Helvetica 55 Roman', sans-serif",
          }}
        >
          {location.map((position) => {
            return (
              <p style={{ padding: "5px 20px 0" }}>
                {"Lng:" +
                  position[0].toFixed(3) +
                  ", " +
                  " " +
                  "Lat:" +
                  position[1].toFixed(3)}
              </p>
            );
          })}
        </div>
        <button
          onClick={getLocation}
          style={{
            backgroundColor: "#E88530",
            color: "#fff",
            padding: "14px 20px",
            width: "170px",
            margin: "auto",
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
          }}
        >
          <img src={locate} alt="" style={{ marginRight: "5px" }} />
          Pick Location
        </button>
        <Link
          to="finishedMapboard"
          style={{
            // backgroundColor: "#E88530",
            border: "3px solid #E88530",
            color: "#E88530",
            textDecoration: "none",
            padding: "15px 20px",
            width: "170px",
            margin: "auto",
            marginTop: "10px",
            textAlign: "center",
            fontSize: "12px",
            borderRadius: "25px",
            boxSizing: "border-box",
          }}
        >
          See on Map
        </Link>
      </div>
    </div>
  );
}

export default Body;
