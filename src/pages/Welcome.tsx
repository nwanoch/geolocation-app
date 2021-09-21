import React from "react";
import BottomDiv from "../components/WelcomeComponents/BottomDiv/BottomDiv";
import Greeting from "../components/Greeting/Greeting";
import LogoDIv from "../components/WelcomeComponents/LogoDIv/LogoDIv";
import { motion } from "framer-motion";
import { IonPage } from "@ionic/react";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    tansition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
};
function Welcome() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </IonPage>
  );
}

export default Welcome;
