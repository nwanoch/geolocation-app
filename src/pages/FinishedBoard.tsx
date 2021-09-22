import { IonPage } from "@ionic/react";
import React from "react";
import Body from "../components/FinishedMapboard/Body";
import Nav from "../components/MapBoard/Nav/Nav";
// import Nav from "../components/Nav/Nav";

function FinishedMapboard() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Nav />
      <Body />
    </IonPage>
  );
}

export default FinishedMapboard;
