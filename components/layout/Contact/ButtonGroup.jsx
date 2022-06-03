import { Flex } from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";

import { Button } from "@/components/common";

export default function ContactButtonGroup({ ...props }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap={5}
      my={10}
      w={{ base: "full", lg: "50%" }}
      {...props}
    >
      <Button
        href=""
        variant="linkedin"
        fontSize="md"
        width="full"
        leftIcon={<AiFillLinkedin />}
        rightIcon={<HiArrowSmRight />}
      >
        LinkedIn
      </Button>
      <Button
        href="https://github.com/AlexBergDev"
        variant="github"
        fontSize="md"
        width="full"
        leftIcon={<VscGithub />}
        rightIcon={<HiArrowSmRight />}
      >
        GitHub
      </Button>
    </Flex>
  );
}
