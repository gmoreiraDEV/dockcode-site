import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      purple: {
        500: "#7928CA",
        900: "#280353",
      },
      pink: {
        500: "#FF0080",
      },
      gray: {
        100: "#EEEEEE",
        300: "CEC7CC",
        900: "#09050C",
      },
    },
  },
});
export default theme;
