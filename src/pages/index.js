import Accomplishments from '../components/Accomplishments/Accomplishments';
// import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import AnimationContainer from '../components/Earth/AnimationContainer';
import { useState } from 'react';

const Home = () => {
  const [location, setLocation] = useState(false)
  return (
    <Layout setLocation={setLocation}>
      <Section grid>
        <Hero />
        {/* <BgAnimation /> */}
        <AnimationContainer setLocation={setLocation} location={location}/>
      </Section>
      <Projects />
      <Technologies />
      {/* <Timeline /> */}
      <Accomplishments />
    </Layout>
  );
};

export default Home;
