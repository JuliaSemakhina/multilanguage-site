import { useTranslation } from "react-i18next";
import React from 'react';
import logo from '../images/logo.svg';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className='footer'>
      <div className='icon'>
        <img src={logo} />
      </div>
      <div className='footer-content'>
        <div className='location'>
          <FaLocationArrow className="l-image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
        </div>
        <div className='footer-contacts'>
          <div>
            <FaPhoneSquare className="l-image" />
            <p>+1-543-123-4567</p>
          </div>
          <div>
            <FaEnvelope className="l-image" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className='footer-links'>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className='socials'>
          <a href='#'><FaGithub /></a>
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaTelegramPlane /></a>
        </div>
      </div>

    </div>
  )

}

export default Footer;