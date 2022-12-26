import React, { useRef, useState, useEffect } from 'react';
import { Grid, AppBar, Button, IconButton, Toolbar, ButtonGroup, Radio } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import RoofingIcon from '@mui/icons-material/Roofing';
import EmailIcon from '@mui/icons-material/Email';

import classNames from 'classnames';

import { LanguageContext } from 'context/LanguageContext';
import { useContext } from 'react';

function MenuComponent() {
  const { language, setLanguage } = useContext(LanguageContext);


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
    <div className="language-buttons">
      <ButtonGroup size="small" aria-label="language" color="primary">
        <Radio
          checked={language === 'english'}
          onChange={handleLanguageChange}
          value="english"
          icon={
            <img src="/englishIcon.png" alt="English" style={{ height: '1.5rem' }} />
          }
          checkedIcon={
            <img
              src="/englishIcon.png"
              alt="EnglishChecked"
              style={{ height: '2.5rem' }}
            />
          }
        />
            <Radio
              checked={language === 'turkish'}
              onChange={handleLanguageChange}
              value="turkish"
              icon={<img src="/turkeyIcon.png" alt="Turkish" style={{ height: '1.5rem' }} />
            }
              checkedIcon={<img src="/turkeyIcon.png" alt="TurkishChecked" style={{ height: '2.5rem' }} />
            }
            />
      </ButtonGroup>
        </div>
      </Grid>
      </Toolbar>
      </AppBar>

    </LanguageContext.Provider>
  );
}

export default MenuComponent;
