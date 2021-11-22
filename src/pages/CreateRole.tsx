import Icon from "@chakra-ui/icon";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateRoleScreen from "../components/CreateRole";
import Greeting from "../components/Greeting/Greeting";

const CreateRole: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  return (
    <IonPage>
      <IonContent fullscreen>
        <CreateRoleScreen />
      </IonContent>
    </IonPage>
  );
};

export default CreateRole;
