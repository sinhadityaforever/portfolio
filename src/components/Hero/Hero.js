import React from "react";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! I'm Aditya. <br />
          A Person Who <br />
          Iterates Fast
        </SectionTitle>

        {/* <SectionText>
         
        </SectionText> */}
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
