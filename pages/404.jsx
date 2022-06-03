import { Head, Layout, Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";

export default function Contact() {
  return (
    <Layout>
      <Head title="Page not found" description="" />
      <Container minH={{ base: "70vh", md: "75vh" }}>
        <Heading>Page not found</Heading>
        <Paragraph mb={5}>
          Seems like the page you are trying to find does not exist. (Error code
          404)
        </Paragraph>
      </Container>
    </Layout>
  );
}
