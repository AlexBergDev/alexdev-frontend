import { Text, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function Paragraph({ children, ...props }) {
  return (
    <Text
      fontSize="xs"
      color={useColorModeValue("brand.500", "brand.100")}
      fontWeight={400}
      {...props}
    >
      {children}
    </Text>
  );
}

Paragraph.propTypes = {
  children: PropTypes.string,
};
