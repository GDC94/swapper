import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CustomSelect: FunctionComponent = () => {
  return (
    <Menu isLazy={true} placement="bottom-end">
      <MenuButton
        w={150}
        size={"sm"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={"pink"}
        color={"background"}
      >
        Actions
      </MenuButton>
      <MenuList
        maxWidth={"200px"}
        bg={"background"}
        border="4px"
        borderColor="grayLight"
        borderRadius="12px"
      >
        <MenuItem bg={"background"}>Download</MenuItem>
        <MenuItem bg={"background"}>Create a Copy</MenuItem>
        <MenuItem bg={"background"}>Mark as Draft</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomSelect;
