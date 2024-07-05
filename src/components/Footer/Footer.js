import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:9648592202'>8382002892</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:guptamohit01112002@gmail.com'>yashubdl@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/ybpheno16'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/yashendrabadal/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href=''>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
