import {
  Head,
  Layout,
  Container,
  AboutCard,
  ContactDetails,
  ContactButtonGroup,
} from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";

export default function Contact() {
  return (
    <Layout>
      <Head
        title="Contact me"
        description="Don&#39;t hesitate to contact me for potential proposals or questions on my projects. Feel free to use this contact form or reach me via email or phone."
      />
      <Container minH={{ base: "70vh", md: "75vh" }}>
        <Heading>Contact me</Heading>
        <Paragraph mb={5}>
          Don&#39;t hesitate to contact me for potential proposals or questions
          on my projects. Feel free to use this contact form or reach me via
          email or phone
        </Paragraph>
        <AboutCard title="" w={{ base: "full", lg: "50%" }} p={5}>
          <ContactDetails />
        </AboutCard>
        <ContactButtonGroup />
      </Container>
    </Layout>
  );
}
