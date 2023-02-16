import {
  Box,
  Container,
  VStack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("brand.100", "gray.800")}
      color={useColorModeValue("brand.200", "gray.200")}
      mt={10}
    >
      <Container
        as={VStack}
        maxW={"6xl"}
        py={8}
        px={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        <Text>© 2023 Alex Da Silva. All rights reserved</Text>
        <Text>
          Find me on{" "}
          <Link href="" passHref>
            <ChakraLink
              color={useColorModeValue("brand.500", "gray.200")}
              isExternal
            >
              LinkedIn
            </ChakraLink>
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/AlexBergDev" passHref>
            <ChakraLink
              color={useColorModeValue("brand.500", "gray.200")}
              isExternal
            >
              GitHub
            </ChakraLink>
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
