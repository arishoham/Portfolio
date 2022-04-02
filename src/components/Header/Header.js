import Link from 'next/link';
import React, { useState } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMore,
} from 'react-icons/ai';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';
import Image from 'next/image';
import NavDropDown from '../NavDropDown';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <Image src="/logo.png" height={40} width={40} alt="logo" />{' '}
            <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
              Ari Shoham
            </span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills" passHref>
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <NavLink href="/files/resume.pdf">Resume</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/arishoham">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ari-shoham/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/arishoham">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://www.twitter.com/arishoham">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons> */}
        <SocialIcons onClick={() => setisOpen(!isOpen)}>
          <AiOutlineMore size="3rem" />
        </SocialIcons>
      </Div3>
      <NavDropDown isOpen={isOpen} />
    </Container>
  );
};

export default Header;
