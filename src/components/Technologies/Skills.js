import { SiFirebase, SiGit, SiReact, SiPostgresql } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export const Skills = [
  {
    slug: 'react',
    Component: SiReact,
    title: 'React',
    Description: () => <>I build responsive, fluid UIs using React.</>,
  },
  {
    slug: 'node',
    Component: FaNodeJs,
    title: 'Node',
    Description: () => (
      <>Node and Express are my preferred method of building backends.</>
    ),
  },
  {
    slug: 'typescript',
    Component: SiTypescript,
    title: 'Typescript',
    Description: () => (
      <>I prefer Typescript to catch bugs early and IDE support.</>
    ),
  },
  {
    slug: 'postgresql',
    Component: SiPostgresql,
    title: 'PostgreSQL',
    Description: () => (
      <>I typically use relational databases in my projects.</>
    ),
  },
  {
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
    Description: () => (
      <>I have used Firebase for auth, database & storage in my apps.</>
    ),
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: () => (
      <>Git is a tool I rely on everyday to manage my workflow.</>
    ),
  },
];
