import { SimpleGrid } from "@chakra-ui/react";

export default function PortfolioGrid({ children, ...props }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={{ base: 14, md: 10 }}
      my={8}
      {...props}
    >
      {children}
    </SimpleGrid>
  );
}
