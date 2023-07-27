import { FunctionComponent } from "react";
import { BiWallet } from "react-icons/bi";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

interface ModalWalletsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWallets: FunctionComponent<ModalWalletsProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
      <ModalOverlay />
      <ModalContent
        bg={"#0d111c"}
        h={600}
        border={"4px"}
        borderColor={"grayLight"}
        borderRadius={"12px"}
      >
        <ModalHeader>
          <Heading as="h4" size="sm">
            Connect your wallet
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <Text fontWeight={500} color={"#737373"}>
              Al conectar una billetera, usted acepta los requisitos de Swapper
              Labs. Términos de servicio y consentir en su Política de
              privacidad. (Última actualización 6.7.23)
            </Text>
          </HStack>
          <Box position="relative" mt="10">
            <Divider />
            <AbsoluteCenter bg={"background"} px="4">
              <BiWallet color={"#ffffff"} />
            </AbsoluteCenter>
          </Box>
          <HStack justifyContent={"space-evenly"} mt={"10"}>
            <Stack
              border="1px"
              borderColor="grayLight"
              borderRadius={12}
              p={10}
              bg={"#151a27"}
              w={"100%"}
              transition={".2s"}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              <Image src="/images/metamask.png" alt="Dan Abramov" w={"30px"} />
            </Stack>

            <Stack
              border="1px"
              borderColor="grayLight"
              borderRadius={12}
              p={10}
              bg={"#151a27"}
              w={"100%"}
              transition={".2s"}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              <Image src="/images/metamask.png" alt="Dan Abramov" w={"30px"} />
            </Stack>
          </HStack>
          <HStack justifyContent={"space-evenly"} mt={"10"}>
            <Stack
              border="1px"
              borderColor="grayLight"
              borderRadius={12}
              p={10}
              bg={"#151a27"}
              w={"100%"}
              transition={".2s"}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              <Image src="/images/metamask.png" alt="Dan Abramov" w={"30px"} />
            </Stack>

            <Stack
              border="1px"
              borderColor="grayLight"
              borderRadius={12}
              p={10}
              bg={"#151a27"}
              w={"100%"}
              transition={".2s"}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              <Image src="/images/metamask.png" alt="Dan Abramov" w={"30px"} />
            </Stack>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button size={"sm"} onClick={onClose} bg={"pink"}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWallets;
