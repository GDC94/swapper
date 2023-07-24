import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#02000a",
        color: "#ffffff",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: `Rubik, ${base.fonts?.body}`,
      },
    },
  },
  colors: {
    background: "#000000",
    blue: "#0000ee",
    turqoise: "#00c9a7",
    violet: "#7309ff",
    pink: "#e1bbff",
    red: "000",
    grayLight: "#645d6e30",
  },
  fonts: {
    heading: `Rubik, ${base.fonts?.heading}`,
    body: `Nunito, ${base.fonts?.body}`,
  },
});

export default theme;
