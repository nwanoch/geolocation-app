import { IonPage } from "@ionic/react";
import React from "react";
import Body from "../components/FinishedMapboard/Body/Body";
import Nav from "../components/FinishedMapboard/Nav/Nav";

function FinishedMapboard() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Nav />
      <Body />
    </IonPage>
  );
}

export default FinishedMapboard;
