import { Button, HStack, Heading, Stack } from "@chakra-ui/react";
import { BiWallet } from "react-icons/bi";
import { StackNavStyles } from "./navBar.styles";
import StatusIndicator from "../statusIndicator/statusIndicator";

const NavBar = () => {
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
        >
          Connect Wallet
        </Button>

        <StatusIndicator />
      </HStack>
    </Stack>
  );
};

export default NavBar;
