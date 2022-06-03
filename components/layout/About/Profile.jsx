import { Image } from "@chakra-ui/react";

export default function AboutProfile({ children, ...props }) {
  return (
    <Image
      borderRadius="full"
      boxSize="180px"
      src="/assets/images/about/me.jpg"
      alt="Alex Da Silva"
      shadow="lg"
      {...props}
    />
  );
}
