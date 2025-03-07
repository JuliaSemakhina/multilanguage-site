import React from 'react'
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
    return (
      <main>
        <h1>{t("about")}</h1>
      </main>
    );
  };

  export default About;