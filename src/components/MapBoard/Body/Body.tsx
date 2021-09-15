import { IonIcon } from "@ionic/react";
import React from "react";
import locate from "../../../images/locate.png";
function Body() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100vw",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        style={{
          width: "100vw",
          height: "100%",
          border: "0",
          position: "absolute",
          zIndex: 50,
        }}
      />

      <button
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
