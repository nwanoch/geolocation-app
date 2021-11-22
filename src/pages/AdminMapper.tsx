import Icon from "@chakra-ui/icon";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateRoleScreen from "../components/CreateRole";
import ManageMapper from "../components/ManageMapper";
import ManageSupervisor from "../components/ManageSupervisor";

const AdminMapper: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  return (
    <IonPage>
      <IonContent fullscreen>
        <ManageMapper />
      </IonContent>
    </IonPage>
  );
};

export default AdminMapper;
