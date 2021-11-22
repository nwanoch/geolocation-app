import { Button } from "@chakra-ui/button";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Greeting from "../components/Greeting/Greeting";
import { useHistory } from "react-router";
const SupervisorHome: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  console.log(user);
  const history = useHistory();
  return (
    <Box bg="white" minH="100vh">
      <Greeting />
      <Flex direction="column" justify="center" mt="50px">
        <Flex justify="space-between" mb="40px" px="30px">
          <Flex
            w="30%"
            py="20px"
            bg="#254159"
            direction="column"
            justify="center"
            rounded="md"
          >
            <Text textAlign="center" fontWeight="400">
              All
            </Text>
            <Text as="h1" mt="5px" fontSize="lg" textAlign="center">
              22
            </Text>
          </Flex>{" "}
          <Flex
            w="30%"
            py="20px"
            bg="white"
            boxShadow="lg"
            direction="column"
            justify="center"
            rounded="md"
            color="gold"
          >
            <Text textAlign="center" fontWeight="400">
              Pending
            </Text>
            <Text as="h1" mt="5px" fontSize="lg" textAlign="center">
              22
            </Text>
          </Flex>
          <Flex
            w="30%"
            rounded="md"
            py="20px"
            bg="teal"
            direction="column"
            justify="center"
          >
            <Text as="h2" textAlign="center">
              completed
            </Text>
            <Text as="h1" mt="5px" fontSize="lg" textAlign="center">
              1122
            </Text>
          </Flex>
        </Flex>
        <Stack direction="column" spacing={4} w="60%" mx="auto">
          <Button
            colorScheme="blue"
            variant="outline"
            color="#254159"
            borderColor="#254159"
            onClick={() => {
              console.log("create clicked");
              history.push("/create-task");
            }}
          >
            Create new Task
          </Button>
          <Button
            onClick={() => {
              console.log("clicked");
              history.push("/view-task");
            }}
            color="#254159"
            colorScheme="blue"
            variant="outline"
            borderColor="#254159"
          >
            View all Tasks
          </Button>{" "}
        </Stack>
      </Flex>
    </Box>
  );
};

export default SupervisorHome;
