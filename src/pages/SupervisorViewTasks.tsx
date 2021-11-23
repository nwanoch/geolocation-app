import Icon from "@chakra-ui/icon";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import Tasks from "../components/Tasks";

const SupervisorViewTasks: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  return (
    <IonPage>
      <IonContent fullscreen>
        <Tasks />
      </IonContent>
    </IonPage>
  );
};

export default SupervisorViewTasks;
