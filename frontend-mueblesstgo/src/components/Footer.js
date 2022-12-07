import React from 'react';
import {
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>©Doña Tencha 2022.</SocialLogo>
              <SocialIcons>
                <SocialIconLink href='https://github.com/PodssilDev' target='_blank' aria-label='Github' rel='noopener noreferrer' >
                  <FaGithub/>
                </SocialIconLink>
                <SocialIconLink href='' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  };
  
  export default Footer;
  
export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;


export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #e31837;
    transition: 0.5s animation ease-out;
  }
`;
