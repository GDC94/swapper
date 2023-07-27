import { FlexStyles } from "./swap.styles";
import CustomSelect from "../customSelect/customSelect";
import { CheckIcon } from "@chakra-ui/icons";
import { MdOutlineSwapVert } from "react-icons/md";
import {
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";

export const Swap = () => {
  return (
    <Flex
      {...FlexStyles}
      w={[400, 600, 900]}
      flexDirection={{ md: "column", lg: "row" }}
      bg={"#060717"}
    >
      <VStack w={"60%"}>
        <VStack
          h={"full"}
          p={4}
          borderRadius={8}
          spacing={2}
          flexDir={"row"}
          bg={"grayLight"}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              // eslint-disable-next-line react/no-children-prop
              children={<CheckIcon color="green.500" />}
            />
            <Input
              placeholder="Enter amount"
              focusBorderColor="transparent"
              border={"none"}
            />
          </InputGroup>
          <CustomSelect />
        </VStack>
        <IconButton
          colorScheme="pink"
          aria-label="Swap"
          icon={<MdOutlineSwapVert />}
          size={"md"}
          fontSize={"24px"}
          color={"pink"}
        />

        <VStack
          h={"full"}
          p={4}
          borderRadius={8}
          spacing={2}
          flexDir={"row"}
          bg={"grayLight"}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              // eslint-disable-next-line react/no-children-prop
              children={<CheckIcon color="green.500" />}
            />
            <Input
              placeholder="Enter amount"
              focusBorderColor="transparent"
              border={"none"}
            />
          </InputGroup>
          <CustomSelect />
        </VStack>
      </VStack>
      <VStack h={"full"} w={"40%"} p={10} spacing={3}>
        <Heading>Columna 1</Heading>
      </VStack>
    </Flex>
  );
};

export default Swap;
