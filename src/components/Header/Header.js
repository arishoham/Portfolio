import Link from 'next/link';
import React from 'react';
// import React, { useRef, useState, useEffect } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMore,
  AiTwotoneMail,
  AiFillHome,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  NavLinkLi,
} from './HeaderStyles';
import Image from 'next/image';
// import NavDropDown from '../NavDropDown';

const Header = ({ setLocation }) => {
  // Used for dropdown
  // const [isOpen, setIsOpen] = useState(false);
  // const wrapperRef = useRef(null);
  // useEffect(() => {
  //   function handleClickOutside(e) {
  //     if (
  //       wrapperRef.current &&
  //       e.target.id !== 'more-menu' &&
  //       !wrapperRef.current.contains(e.target)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [wrapperRef]);
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
        <NavLinkLi>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </NavLinkLi>
        <NavLinkLi>
          <Link href="#skills" passHref>
            <NavLink>Skills</NavLink>
          </Link>
        </NavLinkLi>
        <NavLinkLi>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavLinkLi>
        <NavLinkLi>
          <NavLink href="/files/resume.pdf">Resume</NavLink>
        </NavLinkLi>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/arishoham">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ari-shoham/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://www.instagram.com/arishoham">
          <AiFillInstagram size="3rem" />
        </SocialIcons> */}
        <SocialIcons
          href="mailto:arishoham@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail size="3rem" />
        </SocialIcons>
        <SocialIcons onClick={() => setLocation(true)}>
          <AiFillHome size="3rem" />
        </SocialIcons>
        {/* <SocialIcons onClick={(e) => setIsOpen((cur) => !cur)}>
          <AiOutlineMore size="3rem" id="more-menu" />
        </SocialIcons> */}
      </Div3>
      {/* <NavDropDown
        ref={wrapperRef}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setLocation={setLocation}
      /> */}
    </Container>
  );
};

export default Header;
