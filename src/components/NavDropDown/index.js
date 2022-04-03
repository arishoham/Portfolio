import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './NavDropDown';

const NavDropDown = React.forwardRef(function NavDropDown(props, ref) {
  const handleHomeClick = () => {
    props.setIsOpen(false);
    props.setLocation(true);
  };

  return (
    <DropDownContainer active={props.isOpen} ref={ref}>
      <DropDownItem href="tel:617-308-2732">
        <DropDownIcon>
          <AiFillPhone />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Phone</DropDownItemTitle>
          <DropDownItemDesc>
            Let&apos;s get together and have a chat!
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem
        href="mailto:arishoham@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <DropDownIcon>
          <MdEmail />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Email</DropDownItemTitle>
          <DropDownItemDesc>
            Send me a message, and let&apos;s chat!
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem onClick={handleHomeClick}>
        <DropDownIcon>
          <FaHome />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Home</DropDownItemTitle>
          <DropDownItemDesc>Boston, MA</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  );
});

export default NavDropDown;
