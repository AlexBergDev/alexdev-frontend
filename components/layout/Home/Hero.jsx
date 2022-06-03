import {
  Center,
  Heading,
  Text,
  Stack,
  Box,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

import { Button } from "@/components/common";

export default function Hero() {
  return (
    <Center h="80vh">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 32, lg: 64 }}
      >
        <Box>
          <VisuallyHidden as="h1">
            Welcome, I&#39;m Alex Front-End developer And this is my portfolio
          </VisuallyHidden>
          <Heading
            display="inline-flex"
            size={{ base: "xl", lg: "2xl" }}
            fontWeight={300}
            color={useColorModeValue("brand.200", "brand.100")}
            p={{ base: 0, lg: 2 }}
          >
            Welcome,&nbsp;
            <Text
              color={useColorModeValue("brand.500", "brand.500")}
              fontWeight={400}
            >
              I&#39;m Alex
            </Text>
          </Heading>
          <Heading
            size={{ base: "xl", lg: "2xl" }}
            color={useColorModeValue("brand.500", "brand.500")}
            fontWeight={400}
            p={{ base: 0, lg: 2 }}
          >
            Front-End developer
          </Heading>
          <Heading
            display="inline-flex"
            size={{ base: "xl", lg: "2xl" }}
            fontWeight={300}
            color={useColorModeValue("brand.200", "brand.100")}
            p={{ base: 0, lg: 2 }}
          >
            And this is my&nbsp;
            <Text
              color={useColorModeValue("brand.500", "brand.500")}
              fontWeight={400}
            >
              portfolio
            </Text>
          </Heading>
        </Box>
        <Box justifyItems="center" textAlign="center" py={10}>
          <Button href="/portfolio" variant="primary" size="lg" fontSize="lg">
            Discover portfolio
          </Button>
        </Box>
      </Stack>
    </Center>
  );
}
