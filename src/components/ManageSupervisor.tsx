import { Button } from "@chakra-ui/button";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
 
import { NavLink } from "react-router-dom";
import Greeting from "./Greeting/Greeting";

function ManageSupervisor() {
  return (
    <Box minH="100vh" bg="white">
      <Greeting />
      <Box px="30px">
        <Link color="grey" to="/home" as={NavLink}>
          Back
        </Link>
        <Text textAlign="center" mt="15px" color="#254159">
          Manage Supervisors
        </Text>{" "}
        <Flex
          justify="space-between"
          align="center"
          mt="30px"
          borderBottom="1px solid grey"
          pb="20px"
        >
          <Text w="70%" color="grey" textAlign="left">
            Supervisor Details
          </Text>{" "}
          <Text w="30%" color="grey" textAlign="center">
            Action
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          mt="10px"
          pb="10px"
          borderBottom="1px solid grey"
        >
          <Text w="70%" color="grey" textAlign="left">
            Emmauel Nwanochie <br />
            emmanuelnwanochiechukwunonso@gmail.com
          </Text>{" "}
          <Text w="30%" color="grey" textAlign="center">
            <Button colorScheme="red" size="sm">
              Delete
            </Button>
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          mt="10px"
          pb="10px"
          borderBottom="1px solid grey"
        >
          <Text w="70%" color="grey" textAlign="left">
            Emmauel Nwanochie <br />
            emmanuelnwanochiechukwunonso@gmail.com
          </Text>{" "}
          <Text w="30%" color="grey" textAlign="center">
            <Button colorScheme="red" size="sm">
              Delete
            </Button>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default ManageSupervisor;
