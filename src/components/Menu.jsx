import { useTranslation } from "react-i18next";
import React from 'react'
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants";
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context.jsx'

const Menu = () => {

  const { toggleMenu } = useGlobalContext();

  const { i18n, t } = useTranslation();

  const onChangeLang = async (e) => {
    const lang_code = e.target.value;

    if (lang_code) {
      try {
        await i18n.changeLanguage(lang_code);
        console.log('Язык успешно изменен на:', lang_code);
      } catch (error) {
        console.error('Ошибка при смене языка:', error);
      }
    } else {
      console.warn('Выбран пустой язык');
    }
  };

  return (
    <div className="nav">
      <div className="container">

        <div className="nav-center">
          <div className="logo-section">
            <img src={logo} />
          </div>

          <div className="languages">
            <select defaultValue={i18n.language} onChange={onChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="nav-links">
            <div className="links">
              <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>
                {t("home")}
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>
                {t("about")}
              </NavLink>
              <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>{t("signin")}</NavLink>
            </div>

          </div>
          <button className='burger-btn' onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Menu;