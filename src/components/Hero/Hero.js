import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Ari Shoham. I am a fullstack web developer who has
          a passion for building things people use.
        </SectionText>
        <Button onClick={(e) => (window.location.href = '/files/resume.pdf')}>
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
