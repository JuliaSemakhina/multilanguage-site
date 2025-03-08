import { useTranslation } from "react-i18next";
import React from 'react';
import iconSecurity from '../images/icon-security.svg';
import iconAnywhere from '../images/icon-access-anywhere.svg';
import iconAnyFile from '../images/icon-any-file.svg';
import iconCollab from '../images/icon-collaboration.svg';

const icons = {
  'icon-security.svg': iconSecurity,
  'icon-access-anywhere.svg': iconAnywhere,
  'icon-collaboration.svg': iconCollab,
  'icon-any-file.svg': iconAnyFile,
};

const Services = () => {

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const services = i18n.getDataByLanguage(currentLanguage)?.translation?.services || [];

  return (
    <section className='services'>
      <div>
        {services.map((service) => {
          const imageUrl = icons[service.url];

          return (
            <div key={service.id} className='service'>
              <div className='picture'>
                <img src={imageUrl} alt={service.title} />
              </div>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services;