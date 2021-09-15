import React, { useEffect, useState } from "react";

const Body: React.FC = () => {
  const [positions, setpositions] = useState<any>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const points = {
        x: position.coords.latitude,
        y: position.coords.longitude,
      };
      setpositions([...positions, points]);
    });
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const points = {
        x: position.coords.latitude,
        y: position.coords.longitude,
      };
      setpositions([...positions, points]);
    });
    console.log(positions);
  };
  return (
    <div>
      <div
        style={{
          height: "90vh",
          width: "100%",
        }}
      ></div>

      <button
        onClick={getLocation}
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
        }}
      >
        Pick
      </button>
    </div>
  );
};

export default Body;
