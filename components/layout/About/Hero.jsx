import { Flex } from "@chakra-ui/react";

export default function AboutHero() {
  return (
    <Flex
      w={"full"}
      h={{ base: "40vh", md: "50vh" }}
      backgroundImage="/assets/images/about/hero.jpg"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    />
  );
}
