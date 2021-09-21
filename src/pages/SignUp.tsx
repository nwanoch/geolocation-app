import React from "react";
import BottomDiv from "../components/SignUpComponents/BottomDiv/BottomDiv";
import Greeting from "../components/Greeting/Greeting";
import LogoDIv from "../components/SignUpComponents/LogoDIv/LogoDIv";
import { IonPage } from "@ionic/react";

function SignUp() {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </IonPage>
  );
}

export default SignUp;
