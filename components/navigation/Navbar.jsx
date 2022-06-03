import { HiMenu } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  chakra,
  Box,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  colorMode,
  VisuallyHidden,
  Stack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  IconButton,
  CloseButton,
  Button as ChakraButton,
} from "@chakra-ui/react";

import React from "react";
import NextImage from "next/image";

import { Button } from "@/components/common";
import { LogoLight, LogoDark } from "@/assets/images";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "layout",
      "objectFit",
      "src",
      "alt",
      "quality",
      "priority",
    ].includes(prop),
});

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("brand.50", "brand.980");
  const themeColor = useColorModeValue("brand.500", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const logo = useColorModeValue(LogoLight, LogoDark);

  return (
    <>
      <React.Fragment>
        <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={3}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="alexdev.no"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>alexdev.no</VisuallyHidden>
                <Box w={161} h={35} position="relative">
                  <Image
                    src={logo}
                    alt={"Alex Dev"}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </Box>
              </chakra.a>
            </Flex>
            <Flex>
              <HStack
                spacing={1}
                color={themeColor}
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button href="/" variant="invisible">
                  Home
                </Button>
                <Button href="/portfolio" variant="invisible">
                  Portfolio
                </Button>
                <Button href="/about" variant="invisible">
                  About
                </Button>
                <Button href="/contact" variant="invisible">
                  Contact
                </Button>
              </HStack>
              <ChakraButton
                ml={8}
                mt={1}
                variant="invisible"
                leftIcon={themeIcon}
                aria-label="Toggle theme"
                onClick={toggleColorMode}
                color={useColorModeValue("brand.200", "brand.50")}
                fontWeight={400}
                fontSize="xs"
                borderWidth={1}
                rounded={20}
                borderColor={useColorModeValue("brand.200", "brand.50")}
                size="sm"
                display={{ base: "none", md: "flex" }}
                _hover={{
                  bg: useColorModeValue("brand.100", "brand.900"),
                  color: useColorModeValue("brand.500", "white"),
                  borderColor: useColorModeValue("brand.500", "white"),
                }}
              >
                Switch to {colorMode === "light" ? "dark" : "light"}
              </ChakraButton>
            </Flex>
            <HStack spacing={1} display={{ base: "flex", md: "none" }}>
              <Box mx={2}>
                <IconButton
                  aria-label="Open menu"
                  display={{ base: "flex", md: "none" }}
                  fontSize="26px"
                  variant="hamburger"
                  icon={<HiMenu />}
                  onClick={onOpen}
                />
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent bg={useColorModeValue("white", "gray.800")}>
                    <Stack px={4} pt={3} color={themeColor}>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        pt={0}
                        pb={12}
                      >
                        <ChakraButton
                          ml={3}
                          variant="invisible"
                          leftIcon={themeIcon}
                          aria-label="Toggle theme"
                          onClick={toggleColorMode}
                          color={useColorModeValue("brand.200", "brand.50")}
                          fontWeight={400}
                          fontSize="xs"
                          size="sm"
                          borderWidth={1}
                          rounded={20}
                          borderColor={useColorModeValue(
                            "brand.200",
                            "brand.50"
                          )}
                          _hover={{
                            bg: useColorModeValue("brand.100", "brand.900"),
                            color: useColorModeValue("brand.500", "white"),
                            borderColor: useColorModeValue(
                              "brand.500",
                              "white"
                            ),
                          }}
                        >
                          Switch to {colorMode === "light" ? "dark" : "light"}
                        </ChakraButton>
                        <CloseButton
                          aria-label="Close menu"
                          color={useColorModeValue("brand.200", "brand.50")}
                          fontSize="lg"
                          mr={1}
                          onClick={onClose}
                          rounded={50}
                        />
                      </Flex>
                      <VStack alignItems="flex-start" spacing={10}>
                        <Button href="/" variant="invisible" fontSize="2xl">
                          <Flex direction="column">
                            <Text>Home</Text>

                            <Text
                              fontSize={"sm"}
                              color={useColorModeValue(
                                "brand.200",
                                "brand.200"
                              )}
                              fontWeight={300}
                              lineHeight={1.4}
                              pt={1}
                              textTransform="none"
                            >
                              Where your journey started
                            </Text>
                          </Flex>
                        </Button>
                        <Button
                          href="/portfolio"
                          variant="invisible"
                          fontSize="2xl"
                        >
                          <Flex direction="column">
                            <Text>Portfolio</Text>

                            <Text
                              fontSize={"sm"}
                              color={useColorModeValue(
                                "brand.200",
                                "brand.200"
                              )}
                              fontWeight={300}
                              lineHeight={1.4}
                              pt={1}
                              textTransform="none"
                            >
                              Overview of my projects
                            </Text>
                          </Flex>
                        </Button>
                        <Button
                          href="/about"
                          variant="invisible"
                          fontSize="2xl"
                        >
                          <Flex direction="column">
                            <Text>About</Text>

                            <Text
                              fontSize={"sm"}
                              color={useColorModeValue(
                                "brand.200",
                                "brand.200"
                              )}
                              fontWeight={300}
                              lineHeight={1.4}
                              pt={1}
                              textTransform="none"
                            >
                              Discover who I am
                            </Text>
                          </Flex>
                        </Button>
                        <Button
                          href="/contact"
                          variant="invisible"
                          fontSize="2xl"
                        >
                          <Flex direction="column">
                            <Text>Contact</Text>

                            <Text
                              fontSize={"sm"}
                              color={useColorModeValue(
                                "brand.200",
                                "brand.200"
                              )}
                              fontWeight={300}
                              lineHeight={1.4}
                              pt={1}
                              textTransform="none"
                            >
                              Get in touch with me
                            </Text>
                          </Flex>
                        </Button>
                        <Flex
                          position="absolute"
                          left={0}
                          bottom={0}
                          right={0}
                          pb={6}
                          px={3}
                          gridGap={3}
                        >
                          <Button
                            variant="invisible"
                            leftIcon={<AiFillLinkedin />}
                            color={useColorModeValue("brand.200", "brand.200")}
                            fontWeight="bold"
                            fontSize="md"
                            href=""
                          >
                            LinkedIn
                          </Button>
                          <Button
                            variant="invisible"
                            leftIcon={<AiFillGithub />}
                            color={useColorModeValue("brand.200", "brand.200")}
                            fontWeight="bold"
                            fontSize="md"
                            href=""
                          >
                            GitHub
                          </Button>
                        </Flex>
                      </VStack>
                    </Stack>
                  </DrawerContent>
                </Drawer>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </>
  );
}
