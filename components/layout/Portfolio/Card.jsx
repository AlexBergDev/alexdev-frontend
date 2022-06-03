import React from "react";
import {
  useColorModeValue,
  Box,
  Image,
  Flex,
  Wrap,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { HiExternalLink, HiArrowSmRight } from "react-icons/hi";

import PropTypes from "prop-types";

import { SubHeading, Date, Paragraph } from "@/components/typography";
import { Button } from "@/components/common";

export default function PortfolioCard({
  children,
  image,
  date,
  title,
  description,
  demoHref,
  githubHref,
}) {
  return (
    <Box
      bg={useColorModeValue("brand.50", "gray.800")}
      textAlign={{ base: "center", md: "start" }}
      rounded={25}
      shadow="lg"
    >
      <LinkBox>
        <LinkOverlay href={demoHref}></LinkOverlay>
        <Image
          src={image}
          alt={title}
          fit="cover"
          w="full"
          h={64}
          bg="gray.100"
          loading="lazy"
          roundedTop={25}
        />
      </LinkBox>
      <Box px={5} py={5}>
        <Date pb={2}>{date}</Date>
        <SubHeading>{title}</SubHeading>
        <Paragraph fontSize={"sm"} my={5}>
          {description}
        </Paragraph>
        <Wrap my={5} justify={{ base: "center", md: "start" }} spacing="2">
          {children}
        </Wrap>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          gap={5}
        >
          <Button
            href={demoHref}
            variant="secondary"
            fontSize="md"
            width="full"
            leftIcon={<HiExternalLink />}
            rightIcon={<HiArrowSmRight />}
          >
            Demo
          </Button>
          <Button
            href={githubHref}
            variant="github"
            fontSize="md"
            width="full"
            leftIcon={<VscGithub />}
            rightIcon={<HiArrowSmRight />}
          >
            Code
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

PortfolioCard.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  href: PropTypes.string,
};
