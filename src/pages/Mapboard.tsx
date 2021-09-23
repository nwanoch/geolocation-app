import { IonPage } from "@ionic/react";
import React from "react";
import Body from "../components/MapBoard/Body/Body";
import Nav from "../components/MapBoard/Nav/Nav";

interface Iprops {
  getLocation(): void;
  location: string;
}

const Mapboard: React.FC<Iprops> = ({ getLocation, location }) => {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Nav />
      <Body getLocation={getLocation} location={location} />
    </IonPage>
  );
};

export default Mapboard;
