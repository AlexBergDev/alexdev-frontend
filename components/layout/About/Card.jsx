import { useColorModeValue, Box, Wrap } from "@chakra-ui/react";

import { SubSubHeading } from "@/components/typography";

import PropTypes from "prop-types";

export default function AboutCard({ children, title, ...props }) {
  return (
    <Box
      bg={useColorModeValue("brand.50", "gray.800")}
      textAlign={{ base: "center", md: "start" }}
      p={{ base: 14, md: 10, lg: 6 }}
      shadow="lg"
      rounded={25}
      {...props}
    >
      <SubSubHeading mb={5}>{title}</SubSubHeading>
      <Wrap justify={{ base: "center", md: "start" }} spacing="2">
        {children}
      </Wrap>
    </Box>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string,
};
