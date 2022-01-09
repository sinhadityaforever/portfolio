import React from "react";
import { DiReact, DiDatabase } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech that I love</SectionTitle>
    <SectionText>
      I've worked with a range of technologies for web and app development. Some
      of them which I love working with includes:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" color="#1F41AF" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, Tailwind CSS, Redux Toolkit, Flutter, Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture color="#1F41AF">
          <FaNodeJs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, GraphQL, Prisma, Apollo Server, Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture color="#1F41AF">
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
