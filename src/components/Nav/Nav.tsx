import { IonButtons, IonMenuButton } from "@ionic/react";
import React from "react";
import gislogo from "../../images/gislogo.png";

function Nav() {
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: " 0 0 20px 20px",
        boxShadow: "5px 5px 15px 5px rgb(0 0 0 / 15%) ",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IonButtons slot="end">
        <IonMenuButton
          auto-hide="false"
          style={{ color: "#4B6275", fontSize: "40px", marginLeft: "30px" }}
        ></IonMenuButton>
      </IonButtons>

      <div style={{ padding: "10px", width: "20%" }}>
        <img style={{ width: "100%" }} src={gislogo} alt="" />
      </div>
      <div
        style={{
          width: "40px",
          marginRight: "30px",
        }}
      ></div>
    </div>
  );
}

export default Nav;
