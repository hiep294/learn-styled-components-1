import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import * as SC from "./index.element";
const Footer = () => {
  return (
    <SC.Container>
      <SC.Subscription>
        <SC.SubHeading>
          Join our excluesive membership to receive the lastest news and trends
        </SC.SubHeading>
        <SC.SubText>You can unsubscribe at any time.</SC.SubText>
        <SC.Form>
          <SC.FormInput
            name="email"
            type="email"
            placeholder="Your Email"
          ></SC.FormInput>
          <Button fontBig>Subscribe</Button>
        </SC.Form>
      </SC.Subscription>
      <SC.LinksContainer>
        <SC.LinksWrapper>
          <SC.LinkItems>
            <SC.LinkTitle>About Us</SC.LinkTitle>
            <SC.LinkNav to="/sign-up">How it works</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Testimonial</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Careers</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Investors</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Terms of Service</SC.LinkNav>
          </SC.LinkItems>
          <SC.LinkItems>
            <SC.LinkTitle>Contact Us</SC.LinkTitle>
            <SC.LinkNav to="/sign-up">How it works</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Testimonial</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Careers</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Investors</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Terms of Service</SC.LinkNav>
          </SC.LinkItems>
        </SC.LinksWrapper>

        <SC.LinksWrapper>
          <SC.LinkItems>
            <SC.LinkTitle>Videos</SC.LinkTitle>
            <SC.LinkNav to="/sign-up">How it works</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Testimonial</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Careers</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Investors</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Terms of Service</SC.LinkNav>
          </SC.LinkItems>
          <SC.LinkItems>
            <SC.LinkTitle>Social Media</SC.LinkTitle>
            <SC.LinkNav to="/sign-up">How it works</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Testimonial</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Careers</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Investors</SC.LinkNav>
            <SC.LinkNav to="/sign-up">Terms of Service</SC.LinkNav>
          </SC.LinkItems>
        </SC.LinksWrapper>
      </SC.LinksContainer>

      <SC.SocialMedia>
        <SC.SocialMediaWrap>
          <SC.SocialLogo to="/">
            <SC.SocialIcon />
            ULTRA
          </SC.SocialLogo>
          <SC.WebsiteRights>ULTRA © 2020</SC.WebsiteRights>
          <SC.SocialIcons>
            <SC.SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SC.SocialIconLink>

            <SC.SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SC.SocialIconLink>

            <SC.SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener-noreferrer"
            >
              <FaYoutube />
            </SC.SocialIconLink>

            <SC.SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SC.SocialIconLink>

            <SC.SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SC.SocialIconLink>
          </SC.SocialIcons>
        </SC.SocialMediaWrap>
      </SC.SocialMedia>
    </SC.Container>
  );
};

export default Footer;
