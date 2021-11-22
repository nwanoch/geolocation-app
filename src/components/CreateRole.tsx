import { Box } from "@chakra-ui/layout";
import React from "react"; 
import CreateRoleForm from "./CreateRoleForm";
import Greeting from "./Greeting/Greeting";

function CreateRoleScreen() {
  return (
    <Box minH="100vh" bg="white">
      <Greeting />
      <CreateRoleForm />
    </Box>
  );
}

export default CreateRoleScreen;
