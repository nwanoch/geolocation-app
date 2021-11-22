import Icon from "@chakra-ui/icon";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTaskScreen from "../components/CreateTask";
import Greeting from "../components/Greeting/Greeting";

const CreateTask: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  return (
    <IonPage>
      <IonContent fullscreen>
        <CreateTaskScreen />
      </IonContent>
    </IonPage>
  );
};

export default CreateTask;
