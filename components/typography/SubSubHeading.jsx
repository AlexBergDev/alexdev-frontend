import { Heading, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function SubHeading({ children, ...props }) {
  return (
    <Heading
      as={"h3"}
      fontSize={{ base: "xl", md: "2xl" }}
      color={useColorModeValue("brand.300", "brand.50")}
      fontWeight={500}
      textTransform={"capitalize"}
      letterSpacing={"wide"}
      {...props}
    >
      {children}
    </Heading>
  );
}

SubHeading.propTypes = {
  children: PropTypes.string,
};
