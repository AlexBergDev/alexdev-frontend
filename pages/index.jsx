import { Head, Layout, Container, HomeHero } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head
        title=""
        description="Welcome, I'm Alex. Full Stack developer. And this is my portfolio."
      />
      <Container>
        <HomeHero />
      </Container>
    </Layout>
  );
}
