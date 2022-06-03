import { VStack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { HiAtSymbol, HiPhone, HiGlobe } from "react-icons/hi";

import { Button } from "@/components/common";

export default function AboutDetails() {
  return (
    <VStack
      alignItems="start"
      spacing={3}
      divider={
        <StackDivider
          borderColor={useColorModeValue("brand.100", "brand.100")}
        />
      }
    >
      <Button
        href="mailto:alex@alexdev.no"
        variant="invisible"
        leftIcon={<HiAtSymbol />}
        textTransform="none"
        color={useColorModeValue("brand.200", "brand.50")}
        fontSize="lg"
      >
        alex@alexdev.no
      </Button>
      <Button
        href="tel:+352 671 519 473"
        variant="invisible"
        leftIcon={<HiPhone />}
        textTransform="none"
        color={useColorModeValue("brand.200", "brand.50")}
        fontSize="lg"
      >
        +352 671 519 473
      </Button>
      <Button
        href=""
        variant="invisible"
        leftIcon={<HiGlobe />}
        textTransform="none"
        cursor="default"
        color={useColorModeValue("brand.200", "brand.50")}
        fontSize="lg"
      >
        Norway
      </Button>
    </VStack>
  );
}
