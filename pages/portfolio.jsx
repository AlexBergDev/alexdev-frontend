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
            image="/assets/images/portfolio/eyes-of-norway-preview.jpg"
            date="Created Nov 23, 2022"
            title="Eyes of Norway"
            description="Eyes of Norway is aiming for long-term, stable collaborations with only independent optical retailers on an exclusive distribution strategy in all areas around Scandinavia."
            demoHref="https://eyesofnorway.com"
            githubHref=""
            disabled
          >
            <StackButton href="https://nextjs.org">NextJS</StackButton>
            <StackButton href="https://chakra-ui.com">Chakra UI</StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
            <StackButton href="https://cloudinary.com">Cloudinary</StackButton>
          </PortfolioCard>

          <PortfolioCard
            image="/assets/images/portfolio/arctic-inn-preview.jpg"
            date="Created May 29, 2022"
            title="Arctic Inn"
            description="Hotel & Camping website that allows guests to book a hotel room or parking. Information and pictures of the hotel and property are going to be displayed for potential guests."
            demoHref="https://arcticinn-frontend.vercel.app"
            githubHref=""
            disabled
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
            image="/assets/images/portfolio/arctic-fashion-preview.jpg"
            date="Created December 18, 2021"
            title="Arctic Fashion"
            description="A modern urban fashion online outlet for young women. Administration dashboard and login function included. (Fictional project / Not a real online shop)"
            demoHref="https://alexdasilva-arctic-fashion.netlify.app/"
            githubHref="https://github.com/AlexBergDev/alex-da-silva-semester-project-2"
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

          <PortfolioCard
            image="/assets/images/portfolio/express-meme-page-preview.jpg"
            date="Created January 23, 2023"
            title="Express Meme Page"
            description="A fictional meme page build with Express. Some of the key features of this project are a functional login page using passportJS. Demo coming soon."
            demoHref=""
            githubHref="https://github.com/AlexBergDev/Alex_DaSilva_AugFT22_JSS"
          >
            <StackButton href="https://www.javascript.com">
              JavaScript
            </StackButton>
            <StackButton href="">Express</StackButton>
            <StackButton href="">EJS</StackButton>
            <StackButton href="https://www.w3schools.com/css/css_intro.asp">
              CSS
            </StackButton>
            <StackButton href="https://getbootstrap.com">Bootstrap</StackButton>
          </PortfolioCard>
        </PortfolioGrid>
      </Container>
    </Layout>
  );
}
