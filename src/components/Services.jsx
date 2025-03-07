import { useTranslation } from "react-i18next";
import React from 'react';

const Services = () => {

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const services = i18n.getDataByLanguage(currentLanguage)?.translation?.services || [];

  return (
    <section className='services'>
      <div>
        {services.map((service) => (
          <div key={service.id} className='service'>
            <div className='picture'><img src={service.url} alt={service.title} /></div>

            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;