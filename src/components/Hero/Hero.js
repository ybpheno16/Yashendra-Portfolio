import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I&apos;m <br/>
        Yashendra 
      </SectionTitle>
      <SectionText>
      A budding web developer with a passion for creative solutions. Interested in learning new tech stacks and programming languages.
      </SectionText>
      <Button onClick={()=>{window.open("https://drive.google.com/file/d/1l3_M3_3_Zak2EQy65WYFwHvD7YD9HKVW/view?usp=sharing", "_blank");}}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;