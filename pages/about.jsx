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
        <Date mb={6}>Updated January 30, 2022</Date>
      </Container>
      <AboutHero />
      <Container>
        <SubHeading mt={6} mb={4}>
          Experience & skillset
        </SubHeading>
        <Paragraph mb={5}>
          Front-End technology and frameworks are always evolving and changing.
          Therefore it is from the utmost importance to stay on track with new
          changes and updates. I am deeply invested in keeping myself updated
          and open to learn new frameworks and technologies. I am trying to step
          foot in Back-End recently. But my strengths lies in Front-End.
        </Paragraph>
        <AboutGrid>
          <AboutCard title="Front-End">
            <StackButton href="https://www.w3schools.com/html/html_intro.asp">
              HTML
            </StackButton>
            <StackButton href="https://www.w3schools.com/css/css_intro.asp">
              CSS
            </StackButton>
            <StackButton href="https://sass-lang.com">SCSS</StackButton>
            <StackButton href="https://getbootstrap.com">Bootstrap</StackButton>
            <StackButton href="https://tailwindcss.com">
              Tailwind CSS
            </StackButton>
            <StackButton href="https://www.javascript.com">
              JavaScript
            </StackButton>
            <StackButton href="https://reactjs.org">ReactJS</StackButton>
            <StackButton href="https://nextjs.org">NextJS</StackButton>
            <StackButton href="https://chakra-ui.com">Chakra UI</StackButton>
          </AboutCard>
          <AboutCard title="Back-End">
            <StackButton href="https://www.javascript.com">
              JavaScript
            </StackButton>
            <StackButton href="https://nodejs.org/en/">NodeJS</StackButton>
            <StackButton href="https://expressjs.com">ExpressJS</StackButton>
          </AboutCard>
          <AboutCard title="Content managment systems">
            <StackButton href="https://wordpress.com">Wordpress</StackButton>
            <StackButton href="https://strapi.io">Strapi</StackButton>
            <StackButton href="https://www.joomla.org">Joomla</StackButton>
          </AboutCard>
          <AboutCard title="Hosting">
            <StackButton href="https://vercel.com">Vercel</StackButton>
            <StackButton href="https://www.netlify.com">Netlify</StackButton>
            <StackButton href="https://pages.github.com">
              GitHub Pages
            </StackButton>
          </AboutCard>
          <AboutCard title="Cloud & database services">
            <StackButton href="https://www.heroku.com">Heroku</StackButton>
            <StackButton href="https://cloudinary.com">Cloudinary</StackButton>
            <StackButton href="https://www.postgresql.org">
              PostgreSQL
            </StackButton>
            <StackButton href="https://www.mysql.com">MySQL</StackButton>
          </AboutCard>
          <AboutCard title="UX/UI Design">
            <StackButton href="https://www.adobe.com/products/xd.html">
              Adobe Xd
            </StackButton>
            <StackButton href="https://www.figma.com">Figma</StackButton>
            <StackButton href="https://www.adobe.com/products/illustrator.html">
              Adobe Illustrator
            </StackButton>
          </AboutCard>
        </AboutGrid>
        <SubHeading mt={6} mb={4}>
          About myself
        </SubHeading>
        <AboutProfile mb={6} />
        <Paragraph mb={5}>
          My name is Alex and I am 23 years old. I live currently in Norway and
          came originally from the tiny European country named Luxembourg.
        </Paragraph>
        <Paragraph mb={5}>
          I love skiing, hiking and canoeing in my free time. I am glad I live
          in Tromsø to be able to do all those activities on a regular basis.
        </Paragraph>
        <Paragraph mb={5}>
          There are rarely communication barriers with me. Due to frequent
          traveling, working and living throughout several countries in Europe,
          I am able to speak 6 languages fluently (English, German, French,
          Norwegian, Portuguese and Luxembourgish). So don&#39;t be shy to
          contact me in your own language!
        </Paragraph>
        <Paragraph mb={5}>
          After finishing school in Luxembourg, I decided to study for my
          Bachelor in economics in Germany at Goethe University Frankfurt. I
          proceeded to start working in Norway as a digital marketing manager
          for a hotel in the Arctic when the opportunity came up. To further
          boost my possibilities I started with Front-End Development studies at
          Noroff Fagskole and am in the process of finishing my last year.
        </Paragraph>
        <Paragraph mb={5}>
          I hope you enjoy reading and looking through my work!
        </Paragraph>
        <ContactButtonGroup />
      </Container>
    </Layout>
  );
}
