import React from "react";
import BottomDiv from "../../components/WelcomeComponents/BottomDiv/BottomDiv";
import Greeting from "../../components/Greeting/Greeting";
import LogoDIv from "../../components/WelcomeComponents/LogoDIv/LogoDIv";
import { motion } from "framer-motion";
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
    <div>
      <Greeting />
      <LogoDIv />
      <BottomDiv />
    </div>
  );
}

export default Welcome;
