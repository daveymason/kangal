import React, { useRef, useState, useEffect } from 'react';
import { Grid, AppBar, Button, IconButton, Toolbar, ButtonGroup, Radio } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIcon from '@mui/icons-material/Phone';

import LanguageIcon from '@mui/icons-material/Language';
import classNames from 'classnames';

function MenuComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [language, setLanguage] = useState('english');

  const appBarRef = useRef(null);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (appBarRef.current) {
      setOffsetTop(appBarRef.current.offsetTop);
    }
  }, [appBarRef]);

  const stickyClass = classNames({
    'app-bar': true,
    sticky: scrollPosition >= offsetTop,
  });

  const toolbarClass = 'toolbar';
  const linkClass = classNames({
    'link': true,
    'link-hover': true,
  });

  return (
<AppBar position="static" ref={appBarRef} className={stickyClass}>
  <Toolbar className={toolbarClass} >
    <Grid container justifyContent="space-between">
    <IconButton edge="start" color="inherit" aria-label="menu">
      <img src="/logoWhite.png" alt="Logo" style={{ height: '3rem' }} />
    </IconButton>
    <Button color="inherit" className={linkClass}>
      <InfoIcon />
      About
    </Button>
    <Button color="inherit" className={linkClass}>
      <LocalHospitalIcon />
      Health
    </Button>
    <Button color="inherit" className={linkClass}>
      <PetsIcon />
      Age
    </Button>
    <Button color="inherit" className={linkClass}>
      <DirectionsCarIcon />
      Rescue
    </Button>
    <Button color="inherit" className={linkClass}>
      <PhoneIcon />
      Contact
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
  );
}

export default MenuComponent;
