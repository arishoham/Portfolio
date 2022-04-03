import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { AnimateUpWrapper } from './HeroSectionComponents';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <AnimateUpWrapper>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
      </AnimateUpWrapper>
      <AnimateUpWrapper delay={0.2}>
        <SectionText>
          Hey there, This is Ari Shoham. I am a fullstack web developer who has
          a passion for building things people use.
        </SectionText>
      </AnimateUpWrapper>
      <AnimateUpWrapper delay={0.4}>
        <Button onClick={(e) => (window.location.href = '/files/resume.pdf')}>
          My Resume
        </Button>
      </AnimateUpWrapper>
    </LeftSection>
  </Section>
);

export default Hero;
