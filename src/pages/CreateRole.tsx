import Icon from "@chakra-ui/icon";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Greeting from "../components/Greeting/Greeting";
import AdminHome from "./AdminHome";

const CreateRole: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  console.log(user);
  return (
    <IonPage>
      <IonContent fullscreen>
        {" "}
        <Greeting />
      </IonContent>
    </IonPage>
  );
};

export default CreateRole;
