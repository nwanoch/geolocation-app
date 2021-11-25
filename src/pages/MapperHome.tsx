import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";

import Greeting from "../components/Greeting/Greeting";
import { useHistory } from "react-router";
const MapperHome: React.FC = () => {
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
            w="45%"
            py="30px"
            bg="#254159"
            direction="column"
            justify="center"
            rounded="md"
          >
            <Text textAlign="center" fontWeight="400">
              pending
            </Text>
            <Text as="h1" mt="5px" fontSize="lg" textAlign="center">
              22
            </Text>
          </Flex>
          <Flex
            w="45%"
            rounded="md"
            py="30px"
            bg="teal"
            direction="column"
            justify="center"
          >
            <Text as="h2" textAlign="center">
              Inspections
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
              history.push("/pending-task");
            }}
          >
            Pending Tasks
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            color="#254159"
            borderColor="#254159"
            onClick={() => {
              console.log("create clicked");
              history.push("/inspection-task");
            }}
          >
            Inspection Tasks
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => {
              setTimeout(() => {
                history.push("/initialmapboard");
              }, 10);
            }}
          >
            Go to Inspect
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            color="#254159"
            borderColor="#254159"
            onClick={() => {
              console.log("create clicked");
              history.push("/upload");
            }}
          >
            Submit Task
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default MapperHome;
