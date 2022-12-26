import React, { useState, useContext } from "react";
import { ButtonGroup, Radio } from "@mui/material";

  //check if there are any props being passed to the component
  //if there are, use them, if not, use the default value

function LanguageSwitcher() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    alert(event.target.value
      ? "Language changed to " + event.target.value
      : "Language not changed"
    );
  };

  return (

  <ButtonGroup size="small" aria-label="language" color="primary">
    <Radio
      checked={language === "english"}
      onChange={handleLanguageChange}
      value="english"
      icon={
        <img
          src="/englishIcon.png"
          alt="English"
          style={{ height: "1.5rem" }}
        />
      }
      checkedIcon={
        <img
          src="/englishIcon.png"
          alt="EnglishChecked"
          style={{ height: "2.5rem" }}
        />
      }
    />
    <Radio
      checked={language === "turkish"}
      onChange={handleLanguageChange}
      value="turkish"
      icon={
        <img src="/turkeyIcon.png" alt="Turkish" style={{ height: "1.5rem" }} />
      }
      checkedIcon={
        <img
          src="/turkeyIcon.png"
          alt="TurkishChecked"
          style={{ height: "2.5rem" }}
        />
      }
    />
  </ButtonGroup>
  );
}

export default LanguageSwitcher;