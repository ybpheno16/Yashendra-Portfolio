import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiLeetcode } from "react-icons/si";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{display: 'flex', alignItems: "center", color:'white', marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/>
          <Span >Yashendra Badal</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/ybpheno16' target="_blank" 
  rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/yashendrabadal/' target="_blank" 
  rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

        <SocialIcons href='https://codeforces.com/profile/phoenix_2232' target="_blank" 
  rel="noopener noreferrer">
        <SiCodeforces size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://leetcode.com/u/YashendraBadal/' target="_blank" 
  rel="noopener noreferrer">
        <SiLeetcode size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://www.geeksforgeeks.org/user/badal_cloud9/' target="_blank" 
  rel="noopener noreferrer">
        <SiGeeksforgeeks size="3rem"/>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
