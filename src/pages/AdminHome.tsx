import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminHome: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  console.log(user);
  return <Box bg="white" minH="100vh"></Box>;
};

export default AdminHome;
