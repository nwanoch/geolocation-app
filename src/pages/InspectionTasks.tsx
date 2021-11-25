import Icon from "@chakra-ui/icon";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import MapperInspectionTasks from "../components/MapperInspectionTasks";
import MapperPendingTasks from "../components/MapperPendingTasks";

const InspectionTasks: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  return (
    <IonPage>
      <IonContent fullscreen>
        <MapperInspectionTasks />
      </IonContent>
    </IonPage>
  );
};

export default InspectionTasks;
