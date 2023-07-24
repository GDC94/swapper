import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { CointainerMainLayout, FlexMainLayout } from "./mainLayout.styles";
import NavBar from "@/components/navBar/navBar";

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container {...CointainerMainLayout}>
      <NavBar/>
      <Flex {...FlexMainLayout}>{children}</Flex>
    </Container>
  );
};
