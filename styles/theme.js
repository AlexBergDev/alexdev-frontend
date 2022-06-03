import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme({
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, sans-serif",
  },
  colors: {
    brand: {
      //Light mode
      50: "#f5f5f5", //--white
      100: "#ededed", //--grey-light
      200: "#7c7979", //--grey-medium
      300: "#535353", //--grey-dark
      400: "#111111", //--black-light
      500: "#ff0000", //--orange (accent light)
      //Dark mode
      600: "#A6D85B", //--AI-dark-col5
      700: "#7BA65E", //--AI-dark-col4
      800: "#497365", //--AI-dark-col3
      900: "#2A2D40", //--AI-dark-col2
      950: "#3B3559", //--AI-dark-col1
      980: "#171924", //--AI-dark-base
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("brand.50", "brand.980")(props),
      },
    }),
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          rounded: 50,
          ...brandRing,
          textTransform: "capitalize",
          color: mode("brand.500", "brand.50")(props),
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mode("brand.500", "brand.50")(props),

          _hover: {
            backgroundColor: mode("brand.500", "brand.50")(props),
            color: mode("white", "brand.980")(props),
          },

          _active: {
            backgroundColor: mode("brand.100", "brand.100")(props),
            color: mode("brand.500", "brand.500")(props),
            borderColor: mode("brand.100", "brand.50")(props),
          },
        }),

        secondary: (props) => ({
          rounded: 50,
          ...brandRing,
          textTransform: "capitalize",
          color: mode("white", "brand.50")(props),
          backgroundColor: mode("brand.500", "brand.500")(props),
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mode("brand.500", "brand.500")(props),

          _hover: {
            color: mode("brand.500", "brand.980")(props),
            backgroundColor: mode("transparent", "brand.100")(props),
          },

          _active: {
            backgroundColor: mode("brand.100", "brand.200")(props),
          },
        }),

        invisible: (props) => ({
          backgroundColor: mode("transparent", "transparent")(props),
          color: mode("brand.500", "brand.50")(props),

          _hover: {
            color: mode("brand.200", "brand.500")(props),
          },

          _focus: {
            boxShadow: "none",
          },
        }),

        hamburger: (props) => ({
          rounded: 50,
          ...brandRing,
          color: mode("white", "white")(props),
          borderWidth: 3,
          borderStyle: "solid",
          backgroundColor: mode("brand.500", "brand.500")(props),
          borderColor: mode("brand.500", "brand.500")(props),

          _hover: {
            backgroundColor: mode("brand.100", "white")(props),
            color: mode("brand.500", "black")(props),
          },

          _active: {
            backgroundColor: mode("brand.200", "brand.200")(props),
            borderColor: mode("brand.500", "brand.500")(props),
          },
        }),

        github: (props) => ({
          rounded: 50,
          ...brandRing,
          textTransform: "capitalize",
          color: mode("white", "brand.50")(props),
          backgroundColor: mode("brand.980", "brand.800")(props),
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mode("brand.980", "brand.800")(props),

          _hover: {
            color: mode("brand.980", "black")(props),
            backgroundColor: mode("transparent", "brand.100")(props),
          },

          _active: {
            backgroundColor: mode("brand.100", "brand.200")(props),
          },
        }),

        linkedin: (props) => ({
          rounded: 50,
          ...brandRing,
          textTransform: "capitalize",
          color: mode("white", "brand.50")(props),
          backgroundColor: mode("brand.950", "brand.950")(props),
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mode("brand.950", "brand.950")(props),

          _hover: {
            color: mode("brand.950", "black")(props),
            backgroundColor: mode("transparent", "brand.100")(props),
          },

          _active: {
            backgroundColor: mode("brand.100", "brand.200")(props),
          },
        }),
      },
    },
  },
});

export default theme;
