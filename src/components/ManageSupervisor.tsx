import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import Greeting from "./Greeting/Greeting";

function ManageSupervisor() {
  return (
    <Box minH="100vh" bg="white" px="30px">
      <Greeting />
      <Link color="grey" to="/home" as={NavLink}>
        Back
      </Link>
      <Text textAlign="center" mt="15px" color="#254159">
        Manage Supervisors
      </Text>
    </Box>
  );
}

export default ManageSupervisor;
