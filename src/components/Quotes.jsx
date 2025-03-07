import { useTranslation } from "react-i18next";
import React from 'react';
import prof1 from '../images/profile-1.jpg';
import prof2 from '../images/profile-2.jpg';
import prof3 from '../images/profile-3.jpg';


const Quotes = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className='quotes-section'>
      <div className='container'>
        <div className='quotes'>
          <div className='quote-item'>
            <p>{t("quote")}</p>
            <div className='reviewer'>
              <img src={prof1} />
              <div className='title'>
                <h4> Satish Patel</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='quote-item'>
            <p>{t("quote")}</p>
            <div className='reviewer'>
              <img src={prof2} />
              <div className='title'>
                <h4>Bruce McKenzie</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='quote-item'>
            <p>{t("quote")}</p>
            <div className='reviewer'>
              <img src={prof3} />
              <div className='title'>
                <h4> Iva Boyd</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes;