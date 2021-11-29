import Icon from "@chakra-ui/icon";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHome from "./AdminHome";
import MapperHome from "./MapperHome";
import SupervisorHome from "./SupervisorHome";

const Home: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  console.log(user);
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <AdminHome /> */}
        {/* <SupervisorHome /> */}
        {/* <MapperHome /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
