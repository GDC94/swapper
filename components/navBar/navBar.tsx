import {
  Button,
  HStack,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { BiWallet } from "react-icons/bi";
import { StackNavStyles } from "./navBar.styles";
import StatusIndicator from "../statusIndicator/statusIndicator";
import ModalWallets from "../modal/modalWallets";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack {...StackNavStyles} flexDirection={"row"}>
      <HStack>
        <Heading as="h4" size="md">
          Swapper
        </Heading>
      </HStack>
      <HStack alignItems={"center"} justifyContent={"center"} spacing={4}>
        <Button
          size="sm"
          px={4}
          bg={"violet"}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
          rightIcon={<BiWallet />}
          onClick={onOpen}
        >
          Connect Wallet
        </Button>
        <ModalWallets isOpen={isOpen} onClose={onClose} />

        <StatusIndicator />
      </HStack>
    </Stack>
  );
};

export default NavBar;
