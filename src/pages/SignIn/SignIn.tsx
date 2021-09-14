import React from "react";
import BottomDiv from "../../components/SignInComponents/BottomDiv/BottomDiv";
import Greeting from "../../components/SignInComponents/Greeting/Greeting";
import LogoDIv from "../../components/SignInComponents/LogoDIv/LogoDIv";

function SignIn() {
  return (
    <div>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </div>
  );
}

export default SignIn;
