import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useState } from "react";
function MapperTaskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <Button onClick={onOpen} bg="brand.blue" colorScheme="blue" size="sm">
        Details
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent pt="20px">
          <ModalHeader>ojuelegba mapping</ModalHeader>
          <ModalCloseButton mt="28px" fontSize="14px" />
          <ModalBody>
            <Text mt="50px">
              Supervisor <Text>Emmanuel Nwanochie</Text>
            </Text>

            <Text mt="15px">
              Supervisors Email: <Text>emmanuel nwanochie</Text>
            </Text>

            <Text mt="15px">
              supervisors Comment: <Text>Nill</Text>
            </Text>

            <Text mt="15px">
              Status: <Text fontStyle="italic">pending</Text>
            </Text>

            <Flex align="center" justify="center" mt="50px">
              {" "}
              <Button
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
                colorScheme="red"
                rounded="sm"
                py="5px"
                height="30px"
                size="md"
                px="30px"
                fontSize="12px"
              >
                Reject Task
              </Button>
              <Button
                ml="10px"
                colorScheme="teal"
                rounded="sm"
                py="5px"
                height="30px"
                size="md"
                px="30px"
                fontSize="12px"
              >
                Accept Task
              </Button>
            </Flex>
            <Box hidden={isHidden}>
              <Text mt="15px">Add Comment:</Text>
              <Flex align="center" mt="10px">
                {" "}
                <Input placeholder="Enter comment here" />{" "}
                <Button
                  ml="10px"
                  colorScheme="red"
                  rounded="sm"
                  py="5px"
                  height="30px"
                  size="md"
                  px="30px"
                  fontSize="12px"
                >
                  reject
                </Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MapperTaskModal;
