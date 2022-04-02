import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
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
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapperRef.current &&
        e.target.id !== 'more-menu' &&
        !wrapperRef.current.contains(e.target)
      ) {
        setisOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
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
        <SocialIcons
          href="https://github.com/arishoham"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ari-shoham/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/arishoham">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        {/* <SocialIcons >
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons> */}
        <SocialIcons onClick={(e) => setisOpen((cur) => !cur)}>
          <AiOutlineMore size="3rem" id="more-menu" />
        </SocialIcons>
      </Div3>
      <NavDropDown ref={wrapperRef} isOpen={isOpen} />
    </Container>
  );
};

export default Header;
