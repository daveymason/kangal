import React, { useRef, useState, useEffect, useContext } from 'react';
import { Grid, AppBar, Button, IconButton, Toolbar, ButtonGroup, Radio } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import RoofingIcon from '@mui/icons-material/Roofing';
import EmailIcon from '@mui/icons-material/Email';

import classNames from 'classnames';

import { LanguageContext } from 'context/LanguageContext';
import LanguageSwitcher from '@components/LanguageSwitcher';

function MenuComponent() {
  const { language, setLanguage } = useContext(LanguageContext);
  console.log('language', language);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const stickyClass = classNames({
    'app-bar': true,
    'sticky': true,  });

  const toolbarClass = 'toolbar';
  const linkClass = classNames({
    'link': true,
    'link-hover': true,
  });

  return (
    <LanguageContext.Provider value={language}>
      <AppBar position="static" className={stickyClass}>
  <Toolbar className={toolbarClass} >
    <Grid container justifyContent="space-between">
    <IconButton edge="start" color="inherit" aria-label="menu" className={linkClass}>
      <img src="/logoWhite.png" alt="Logo" style={{ height: '3rem' }} />
    </IconButton>
    <Button color="inherit" className={linkClass}>
      <InfoIcon />
      {language === 'english' ? 'About' : 'Hakkında'}
    </Button>
    <Button color="inherit" className={linkClass}>
      <LocalHospitalIcon />
      {language === 'english' ? 'Health' : 'Sağlık'}
    </Button>
    <Button color="inherit" className={linkClass}>
      <PetsIcon />
      {language === 'english' ? 'Age' : 'Yaş'}
    </Button>
    <Button color="inherit" className={linkClass}>
      <RoofingIcon />
      {language === 'english' ? 'Rescue' : 'Kurtarma'}
    </Button>
    <Button color="inherit" className={linkClass}>
      <EmailIcon />
      {language === 'english' ? 'Contact' : 'İletişim'}
    </Button>
    <LanguageSwitcher language={language} />
    <div className="language-buttons">

        </div>
      </Grid>
      </Toolbar>
      </AppBar>

    </LanguageContext.Provider>
  );
}

export default MenuComponent;
