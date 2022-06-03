import { Container } from "@chakra-ui/react";

export default function RenderContainer({ children, ...props }) {
  return (
    <Container maxW={"6xl"} {...props}>
      {children}
    </Container>
  );
}
