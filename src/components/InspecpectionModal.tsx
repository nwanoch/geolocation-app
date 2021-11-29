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
import { useHistory } from "react-router";

function InspecpectionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
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
              Status:{" "}
              <Text color="green" fontStyle="italic">
                accepted
              </Text>
            </Text>

            <Text mt="15px">Your Comment: Nill</Text>

            <Box textAlign="center" mt="50px">
           
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default InspecpectionModal;
