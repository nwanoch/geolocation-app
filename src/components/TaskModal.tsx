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

function TaskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              Assignee <Text>Emmanuel Nwanochie</Text>
            </Text>

            <Text mt="15px">
              Assignee Email: <Text>emmanuel nwanochie</Text>
            </Text>

            <Text mt="15px">
              Assignee Comment: <Text>Nill</Text>
            </Text>

            <Text mt="15px">
              Status:{" "}
              <Text color="green" fontStyle="italic">
                completed
              </Text>
            </Text>

            <Text mt="15px">Your Comment:</Text>
            <Flex align="center" mt="10px">
              {" "}
              <Input placeholder="Enter comment here" />{" "}
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
                comment
              </Button>
            </Flex>
            <Flex align="center" justify="center" mt="50px">
              {" "}
              <Button
                colorScheme="red"
                rounded="sm"
                py="5px"
                height="30px"
                size="md"
                px="30px"
                fontSize="12px"
              >
                Reject Result
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
                Accept Result
              </Button>
            </Flex>
            <Box textAlign="center" mt="50px">
              <Button colorScheme="teal" rounded="full">
                View Report
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default TaskModal;
