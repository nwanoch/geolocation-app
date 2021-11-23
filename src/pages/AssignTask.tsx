import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import AssignTaskScreen from "../components/AssignTaskScreen";

function AssignTask() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <AssignTaskScreen />
      </IonContent>
    </IonPage>
  );
}

export default AssignTask;
