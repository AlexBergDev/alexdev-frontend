import { Button, WrapItem } from "@chakra-ui/react";

import Link from "next/link";
import PropTypes from "prop-types";

export default function StackButton({ href, children, ...props }) {
  return (
    <WrapItem>
      <Link href={href} passHref>
        <Button
          as="a"
          fontSize="sm"
          size="sm"
          fontWeight={"400"}
          letterSpacing={"wider"}
          textTransform="capitalize"
          variant="primary"
          isExternal
          {...props}
        >
          {children}
        </Button>
      </Link>
    </WrapItem>
  );
}

StackButton.propTypes = {
  href: PropTypes.string,
};
