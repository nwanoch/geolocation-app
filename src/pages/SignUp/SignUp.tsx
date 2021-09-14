import React from "react";
import BottomDiv from "../../components/SignUpComponents/BottomDiv/BottomDiv";
import Greeting from "../../components/SignUpComponents/Greeting/Greeting";
import LogoDIv from "../../components/SignUpComponents/LogoDIv/LogoDIv";

function SignUp() {
  return (
    <div>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </div>
  );
}

export default SignUp;
