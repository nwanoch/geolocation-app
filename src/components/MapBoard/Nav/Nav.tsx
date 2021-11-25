import { Box, Flex, Text } from "@chakra-ui/layout";
import gislogo from "../../../images/gislogo.png";
import ModalExample from "./Modal";
import { useHistory } from "react-router";
import { Image } from "@chakra-ui/image";
function Nav() {
  const history = useHistory();
  return (
    <Flex
      justify="space-between"
      height="10vh"
      width="100%"
      backgroundColor="#fff"
      borderRadius=" 0 0 20px 20px"
      boxShadow="5px 5px 15px 5px rgb(0 0 0 / 15%) "
      alignItems="center"
      position="relative"
      zIndex={5}
    >
      <Box
        onClick={() => {
          console.log("clicked");
          history.go(-1);
        }}
        pl="30px"
      >
        Back
      </Box>

      <Image src={gislogo} w="50px" alt="" />

      <div
        style={{
          width: "40px",
          marginRight: "30px",
        }}
      ></div>
    </Flex>
  );
}

export default Nav;
