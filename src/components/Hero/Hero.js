import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Headshot } from './HeroStyles';
import { AnimateUpWrapper } from './HeroSectionComponents';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <AnimateUpWrapper>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
      </AnimateUpWrapper>
      <AnimateUpWrapper
        delay={0.2}
        style={{
          display: 'grid',
          gridTemplateColumns: '150px 1fr',
          gap: '15px',
          alignItems: 'center',
          paddingBottom: '20px',
        }}
      >
        <Headshot
          src="/images/headshot.png"
          height="150px"
          width="150px"
          alt=""
          layout="fixed"
        />
        <SectionText style={{ paddingBottom: 0 }}>
          I&apos;m Ari Shoham, a full stack web developer who has a passion for
          solving problems and building things people use.
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
