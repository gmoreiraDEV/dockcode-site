import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors: {
    brand: {
      purple: {
        500: "#7928CA",
        900: "#280353",
      },
      pink: {
        500: "#FF0080",
        900: "#9B205E",
      },
      gray: {
        50: "#F9F9F9",
        100: "#DEDEDE",
        200: "#C3C3C4",
        300: "#A9A7A9",
        400: "#8E8C8F",
        500: "#737174",
        600: "#58565A",
        700: "#3E3A3F",
        800: "#231F25",
        900: "#08040A",
      },
    },
  },
  fonts: {
    heading: "Unica One",
    body: "Roboto",
    button: "Unica One",
  },
});
export default theme;
