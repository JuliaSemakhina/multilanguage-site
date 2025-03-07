import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import hero from '../images/illustration-intro.png';
import { useGlobalContext } from '../context.jsx'
import Services from "../components/Services";
import Productive from '../components/Productive';
import Quotes from '../components/Quotes';


function Home() {
  const { t, i18n } = useTranslation();

  const { isMenuOpen, toggleMenu } = useGlobalContext();

  const [email, setEmail] = useState('');
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setError('Plese enter an e-mail');
      console.log(error);
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  return (

    <div>

      {isMenuOpen && (
        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      )}

      <main>
        <div className='hero_container'>
          <img src={hero} className='hero-img' />
          <h1 className='title'>{t("title")}</h1>
          <p>{t("intro")}</p>
          <button className='btn hero_btn'>{t("button1")}</button>
        </div>
      </main>

      <Services />

      <Productive />

      <Quotes />


      <div className="input-section">
        <h2>{t("input-title")}</h2>
        <p>{t("input-text")}</p>

        <form onSubmit={handleSubmit} className=" input_content">
          <input
            id="input-box"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            style={{
              border: error ? '2px solid red' : 'none'
            }} />
          <button className="button button__input btn" id="submit" type="submit">{t("button2")}</button>
        </form>
        {error && <div className='small'>{error}</div>}
      </div>

    </div>

  );
};

export default Home;