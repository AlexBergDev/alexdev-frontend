import { Heading, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function RenderHeading({ children, ...props }) {
  return (
    <Heading
      as={"h1"}
      size="2xl"
      fontWeight={400}
      mt={8}
      mb={4}
      color={useColorModeValue("brand.300", "brand.50")}
      textTransform={"capitalize"}
      letterSpacing={"wide"}
      {...props}
    >
      {children}
    </Heading>
  );
}

RenderHeading.propTypes = {
  children: PropTypes.string,
};
