import React from "react";
import BottomDiv from "../components/SignInComponents/BottomDiv/BottomDiv";
import Greeting from "../components/Greeting/Greeting";
import LogoDIv from "../components/SignInComponents/LogoDIv/LogoDIv";
import { IonPage } from "@ionic/react";

function SignIn() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </IonPage>
  );
}

export default SignIn;
