import {
  Head,
  Layout,
  Container,
  PortfolioGrid,
  PortfolioCard,
} from "@/components/layout";
import { StackButton } from "@/components/common";
import { Heading, Paragraph } from "@/components/typography";

export default function Portfolio() {
  return (
    <Layout>
      <Head title="Portfolio" description="Discover my most recent projects." />
      <Container>
        <Heading>My work</Heading>
        <Paragraph>
          Discover and look through some of my work to get an idea of what kind
          of solutions I might be able to offer you or your team. All of these
          were created during my studies and my current employment.
        </Paragraph>
        <PortfolioGrid>
          <PortfolioCard
            image="/assets/images/about/hero.jpg"
            date="Created May 29, 2022"
            title="Arctic Inn"
            description="Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
            demoHref="https://arcticinn-frontend.vercel.app"
            githubHref="https://github.com/AlexBergDev/arcticinn-frontend"
          >
            <StackButton href="https://nextjs.org">NextJS</StackButton>
            <StackButton href="https://chakra-ui.com">Chakra UI</StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
            <StackButton href="https://www.heroku.com">Heroku</StackButton>
            <StackButton href="https://www.postgresql.org">
              PostgreSQL
            </StackButton>
            <StackButton href="https://cloudinary.com">Cloudinary</StackButton>
          </PortfolioCard>

          <PortfolioCard
            image="/assets/images/about/hero.jpg"
            date="Created April 3, 2022"
            title="JS frameworks CA"
            description="Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
            demoHref=""
            githubHref="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-AlexBergDev"
          >
            <StackButton href="https://nextjs.org">NextJS</StackButton>
            <StackButton href="https://chakra-ui.com">Chakra UI</StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
            <StackButton href="https://vercel.com">Vercel</StackButton>
          </PortfolioCard>

          <PortfolioCard
            image="/assets/images/portfolio/arctic-fashion.jpg"
            date="Created December 18, 2021"
            title="Arctic Fashion"
            description="A modern urban fashion online outlet for young women."
            demoHref="https://alexdasilva-arctic-fashion.netlify.app/"
            githubHref="https://github.com/AlexBergDev/app-arcticfashion"
          >
            <StackButton href="https://www.w3schools.com/html/html_intro.asp">
              HTML
            </StackButton>
            <StackButton href="https://www.w3schools.com/css/css_intro.asp">
              CSS
            </StackButton>
            <StackButton href="https://sass-lang.com">SCSS</StackButton>
            <StackButton href="https://getbootstrap.com">Bootstrap</StackButton>
            <StackButton href="https://www.javascript.com">
              JavaScript
            </StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
          </PortfolioCard>
        </PortfolioGrid>
      </Container>
    </Layout>
  );
}
