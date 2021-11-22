import { Box } from "@chakra-ui/layout";
import React from "react";
import CreateTaskForm from "./CreateTaskForm";
import Greeting from "./Greeting/Greeting";

function CreateTaskScreen() {
  return (
    <Box minH="100vh" bg="white">
      <Greeting />
      <CreateTaskForm />
    </Box>
  );
}

export default CreateTaskScreen;
