import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-b, #1A2231 0 , #060717 20%, #060717 100%)",
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
    background: "#0d111c",
    blue: "#0000ee",
    turqoise: "#00c9a7",
    violet: "#4c82fb",
    pink: "#fd82ff",
    red: "000",
    grayLight: "#645d6e30",
  },
  fonts: {
    heading: `Rubik, ${base.fonts?.heading}`,
    body: `Rubik, ${base.fonts?.body}`,
  },
});

export default theme;
