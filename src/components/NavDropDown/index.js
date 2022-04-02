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
      <DropDownItem
        href="https://www.google.com/maps/place/Boston,+MA/@42.3303116,-71.134589,11.76z/data=!4m5!3m4!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801"
        target="_blank"
        rel="noreferrer"
      >
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
