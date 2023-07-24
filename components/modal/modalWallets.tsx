import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

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
        bg={"background"}
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
        <ModalBody></ModalBody>

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
