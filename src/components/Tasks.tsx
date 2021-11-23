import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/layout";

import { NavLink } from "react-router-dom";
import Greeting from "./Greeting/Greeting";
import TaskModal from "./TaskModal";

function Tasks() {
  return (
    <Box minH="100vh" bg="white">
      <Greeting />
      <Box px="30px">
        <Link color="grey" to="/home" as={NavLink}>
          Back
        </Link>
        <Text textAlign="center" mt="15px" color="#254159">
          All Tasks
        </Text>{" "}
        <Flex
          justify="space-between"
          align="center"
          mt="30px"
          borderBottom="1px solid grey"
          pb="20px"
        >
          <Text w="70%" color="grey" textAlign="left">
            Task Details
          </Text>{" "}
          <Text w="30%" color="grey" textAlign="center">
            Details
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          mt="10px"
          pb="10px"
          borderBottom="1px solid grey"
        >
          <Box w="70%" color="grey" textAlign="left">
            <Text fontSize="14px"> ojuelegba mapping</Text>
            <Text fontSize="12px">
              details goes here details goes here details goes here
            </Text>
            <Text fontSize="12px" mt="10px">
              status:{" "}
              <Text
                as="span"
                rounded="full"
                py="2px"
                px="10px"
                bg="gold"
                color="white"
              >
                pending
              </Text>
            </Text>
          </Box>
          <Text w="30%" color="grey" textAlign="center">
            <TaskModal />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Tasks;
