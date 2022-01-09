import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import FadeIn from "react-fade-in";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Stuffs that I've built</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <FadeIn>
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent style={{ marginTop: "4rem", color: "black" }}>
                  Tools Used
                </TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.visit ? (
                  <ExternalLinks href={p.visit} target="_blank">
                    Visit
                  </ExternalLinks>
                ) : (
                  <ExternalLinks href={p.demo} target="_blank">
                    Demo
                  </ExternalLinks>
                )}

                <ExternalLinks href={p.source} target="_blank">
                  Source
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          </FadeIn>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
