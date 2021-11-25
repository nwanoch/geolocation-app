import { useEffect, useState } from "react";
import MapGL, {
  GeolocateControl,
  NavigationControl,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import locate from "../../../images/locate.png";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Body({ getLocation, location }) {
  const history = useHistory();
  const state = useSelector((state): any => state);
  const locations = state.location;

  const dispatch = useDispatch();

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
    dispatch({ type: "RESET" });
  }, []);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    zoom: 5,
  });

  return (
    <Box minH="90vh">
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
          {locations.map((position) => {
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
        <Flex justify="space-between">
          <button
            onClick={getLocation}
            style={{
              backgroundColor: "#E88530",
              color: "#fff",
              padding: "10px 10px",
              width: "130px",
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
          <button
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
            style={{
              backgroundColor: "#fff",
              color: "#E88530",
              border: "2px solid #E88530",

              padding: "10px 10px",
              width: "130px",
              margin: "auto",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "25px",
            }}
          >
            Reset
          </button>
        </Flex>

        <Flex mt="10px" justify="space-between">
          {" "}
          <button
            onClick={() => {
              history.push("/finishedMapboard");
            }}
            style={{
              backgroundColor: "#254159",
              color: "#fff",
              padding: "10px 10px",
              width: "130px",
              margin: "auto",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "25px",
            }}
          >
            Finish
          </button>
          <button
            onClick={() => {
              dispatch({ type: "UNDO" });
            }}
            style={{
              backgroundColor: "#fff",
              color: "#254159",
              border: "2px solid #254159",

              padding: "10px 10px",
              width: "130px",
              margin: "auto",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "25px",
            }}
          >
            Undo
          </button>
        </Flex>
      </div>
    </Box>
  );
}

export default Body;
