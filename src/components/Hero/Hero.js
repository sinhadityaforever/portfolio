import React from "react";

import Link from "next/dist/client/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { RoughNotation } from "react-rough-notation";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! I'm Aditya.
          <br />
          A Person Who <br />
          Iterates{" "}
          <RoughNotation type="underline" padding={1} color="blue" show={true}>
            Fast{" "}
          </RoughNotation>
        </SectionTitle>

        {/* <SectionText>
         
        </SectionText> */}
        <Link href="mailto:sinhadityaforever@gmail.com">
          <Button>Say Hello</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
