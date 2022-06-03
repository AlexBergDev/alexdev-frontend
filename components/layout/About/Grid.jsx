import { SimpleGrid } from "@chakra-ui/react";

export default function AboutGrid({ children, ...props }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 5, md: 10 }}
      my={8}
      {...props}
    >
      {children}
    </SimpleGrid>
  );
}
