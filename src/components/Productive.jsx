import { useTranslation } from "react-i18next";
import React from 'react';
import arrow from '../images/icon-arrow.svg';
import productive from '../images/illustration-stay-productive.png';

const Productive = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className='productive-section'>
      <div className='container'>
        <div className='productive'>
          <img src={productive} />
          <div className='prod-text'>
            <h1>{t("header1")} <br /> {t("header2")}</h1>
            <p>{t("text1")}</p>
            <p>{t("text2")}</p>
            <a className='section-link'>
              <span className='text'>{t("link")}</span>
              <img src={arrow} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Productive;