import { Box } from "@chakra-ui/layout";
import React from "react";
import AssignTaskForm from "./AssignTaskForm";
import Greeting from "./Greeting/Greeting";

function AssignTaskScreen() {
  return (
    <Box minH="100vh" bg="white">
      <Greeting />
      <AssignTaskForm />
    </Box>
  );
}

export default AssignTaskScreen;
