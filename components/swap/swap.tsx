import { Flex, Heading } from "@chakra-ui/react";
import { FlexStyles } from "./swap.styles";

export const Swap = () => {
  return (
    <Flex {...FlexStyles} w={[300, 400, 500]}>
      <Heading>Ripio Explorer</Heading>
    </Flex>
  );
};

export default Swap;
