import React from "react";

import BottomDiv from "../components/ForgotComponents/BottomDiv/BottomDiv";
import Greeting from "../components/Greeting/Greeting";
import LogoDIv from "../components/ForgotComponents/LogoDIv/LogoDIv";
import { IonPage } from "@ionic/react";
function Forgot() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </IonPage>
  );
}

export default Forgot;
