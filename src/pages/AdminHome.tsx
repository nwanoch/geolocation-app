import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Link, Stack } from "@chakra-ui/layout";
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import { arrowForwardCircleOutline } from "ionicons/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Greeting from "../components/Greeting/Greeting";
import { useHistory } from "react-router";
const AdminHome: React.FC = () => {
  // all my states
  const state = useSelector((state: any) => state);
  const user = state.user;

  console.log(user);
  const history = useHistory();
  return (
    <Box bg="white" minH="100vh">
      <Greeting />
      <Flex direction="column" justify="center" mt="50px">
        <Stack direction="column" spacing={4} w="50%" mx="auto">
          <Button
            colorScheme="blue"
            variant="outline"
            color="#254159"
            borderColor="#254159"
            onClick={() => {
              console.log("clicked");
              history.push("/create-role");
            }}
          >
            Create new Role
          </Button>
          <Button
            onClick={() => {
              console.log("clicked");
              history.push("/manage-supervisor");
            }}
            color="#254159"
            colorScheme="blue"
            variant="outline"
            borderColor="#254159"
          >
            Manage Supervisors
          </Button>{" "}
          <Button
            onClick={() => {
              console.log("clicked");
              history.push("/manage-mapper");
            }}
            color="#254159"
            borderColor="#254159"
            colorScheme="blue"
            variant="outline"
          >
            Manage Mappers
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AdminHome;
