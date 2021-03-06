import { Button, useColorModeValue } from "@chakra-ui/react";

import Link from "next/link";
import PropTypes from "prop-types";

export default function ChakraNextLinkButton({
  href,
  variant,
  children,
  ...props
}) {
  return (
    <Link href={href} passHref>
      <Button
        as="a"
        fontSize="sm"
        fontWeight={"400"}
        letterSpacing={"wider"}
        textTransform="capitalize"
        variant={variant}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}

ChakraNextLinkButton.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.string,
};
