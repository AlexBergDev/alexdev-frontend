import { Text, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function Paragraph({ children, ...props }) {
  return (
    <Text
      fontSize="md"
      color={useColorModeValue("brand.300", "brand.50")}
      fontWeight={400}
      letterSpacing={"wide"}
      {...props}
    >
      {children}
    </Text>
  );
}

Paragraph.propTypes = {
  children: PropTypes.string,
};
