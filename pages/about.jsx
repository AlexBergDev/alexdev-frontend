import {
  Head,
  Layout,
  Container,
  AboutHero,
  AboutGrid,
  AboutCard,
  AboutProfile,
  ContactButtonGroup,
} from "@/components/layout";
import { StackButton } from "@/components/common";
import { Heading, SubHeading, Date, Paragraph } from "@/components/typography";

export default function About() {
  return (
    <Layout>
      <Head title="About me" description="Find out more about what I do" />
      <Container>
        <Heading>Find out more about what I do</Heading>
        <Date mb={6}>Updated February 15, 2023</Date>
      </Container>
      <AboutHero />
      <Container>
        <SubHeading mt={6} mb={4}>
          Experience & skillset
        </SubHeading>
        <Paragraph mb={5}>
          Aspiring Full Stack developer. I have some years of experience in
          Front-End technologies and frameworks and am currently enrolled in a
          Back-End Development vocational study. I am deeply invested in keeping
          myself updated and open to learn new concepts. I have extensive
          knowledge in Git, JavaScript, ReactJS, NextJS, HTML5, CSS3, SASS/SCSS
          and strongly believe I can be a great asset in a team.
        </Paragraph>
        <AboutGrid>
          <AboutCard title="Languages">
            <StackButton href="https://nodejs.org/en/">NodeJS</StackButton>
            <StackButton href="https://www.w3schools.com/html/html_intro.asp">
              HTML5
            </StackButton>
            <StackButton href="https://www.w3schools.com/css/css_intro.asp">
              CSS3
            </StackButton>
            <StackButton href="https://www.javascript.com">
              JavaScript
            </StackButton>
            <StackButton href="">GraphQL</StackButton>
            <StackButton href="https://www.typescript.com">
              TypeScript
            </StackButton>
          </AboutCard>

          <AboutCard title="Frameworks, Platforms & Libraries">
            <StackButton href="https://tailwindcss.com">
              Tailwind CSS
            </StackButton>
            <StackButton href="https://sass-lang.com">SASS</StackButton>
            <StackButton href="https://getbootstrap.com">Bootstrap</StackButton>
            <StackButton href="https://reactjs.org">ReactJS</StackButton>
            <StackButton href="https://nextjs.org">NextJS</StackButton>
            <StackButton href="https://chakra-ui.com">Chakra UI</StackButton>
            <StackButton href="https://expressjs.com">ExpressJS</StackButton>
            <StackButton href="">jQuery</StackButton>
            <StackButton href="">NPM</StackButton>
            <StackButton href="">Webpack</StackButton>
          </AboutCard>

          <AboutCard title="Hosting/SaaS & CMS">
            <StackButton href="https://www.heroku.com">Heroku</StackButton>
            <StackButton href="https://cloudinary.com">Cloudinary</StackButton>
            <StackButton href="https://vercel.com">Vercel</StackButton>
            <StackButton href="https://www.netlify.com">Netlify</StackButton>
            <StackButton href="https://pages.github.com">
              GitHub Pages
            </StackButton>
            <StackButton href="https://wordpress.com">Wordpress</StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
          </AboutCard>

          <AboutCard title="Databases">
            <StackButton href="https://www.mysql.com">MySQL</StackButton>
            <StackButton href="">MongoDB</StackButton>
            <StackButton href="https://www.postgresql.org">
              PostgreSQL
            </StackButton>
          </AboutCard>

          <AboutCard title="Project Management">
            <StackButton href="">Confluence</StackButton>
            <StackButton href="">Jira</StackButton>
            <StackButton href="">Trello</StackButton>
          </AboutCard>

          <AboutCard title="UX/UI Design">
            <StackButton href="https://www.adobe.com/products/xd.html">
              Adobe Xd
            </StackButton>
            <StackButton href="https://www.adobe.com/products/illustrator.html">
              Adobe Illustrator
            </StackButton>
            <StackButton href="https://www.figma.com">Figma</StackButton>
          </AboutCard>
        </AboutGrid>
        <SubHeading mt={6} mb={4}>
          About myself
        </SubHeading>
        <AboutProfile mb={6} />
        <Paragraph mb={5}>
          My name is Alex and I am 24 years old. I currently live in Norway and
          came originally from the tiny European country named Luxembourg.
        </Paragraph>
        <Paragraph mb={5}>
          I love skiing, hiking and canoeing in my free time. I am glad I live
          in Tromsø to be able to do all those activities on a regular basis.
        </Paragraph>
        <Paragraph mb={5}>
          Due to frequent traveling, working and living throughout several
          countries in Europe, I am able to speak 6 languages fluently (English,
          German, French, Norwegian, Portuguese and Luxembourgish).
        </Paragraph>
        <Paragraph mb={5}>
          After finishing my education in Luxembourg, I proceeded to study
          Front-End Development at Noroff Fagskole. I proceeded to start working
          in Norway as a assistant hotel manager for a hotel in the Arctic when
          the opportunity came up. To further boost my possibilities I started
          with Back-End Development studies at Noroff Fagskole and am in the
          process of finishing my last semester.
        </Paragraph>
        <Paragraph mb={5}>
          I hope you enjoy reading and looking through my work!
        </Paragraph>
        <ContactButtonGroup />
      </Container>
    </Layout>
  );
}
