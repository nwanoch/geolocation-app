import { IonPage } from "@ionic/react";
import React from "react";
import Body from "../components/MapBoard/Body/Body";
import Nav from "../components/MapBoard/Nav/Nav";

function Mapboard() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Nav />
      <Body />
    </IonPage>
  );
}

export default Mapboard;
