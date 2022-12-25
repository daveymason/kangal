import React, { useRef, useState, useEffect } from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIcon from '@mui/icons-material/Phone';
import classNames from 'classnames';

function MenuComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const appBarRef = useRef(null);

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
        <Toolbar className={toolbarClass}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HomeIcon />
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
      </Toolbar>
    </AppBar>
  );
}

export default MenuComponent;
