import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context.jsx'

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useGlobalContext();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <aside className={`menu ${isMenuOpen ? 'show' : ""}`}>
      <div className='sidebar d-f_a-c'>
        <button className='close-btn' onClick={toggleMenu}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <ul>
            <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>
              {t("home")}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>
              {t("about")}
            </NavLink>
            <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>{t("signin")}</NavLink>
          </ul>
        </div>
      </div>

    </aside>
  )
}

export default MobileMenu