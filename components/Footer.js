import styles from './Footer.module.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import GroupButton from '@components/ui/GroupButton/GroupButton'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import RoofingIcon from '@mui/icons-material/Roofing';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const buttons = [
    { label: '', icon: <HomeIcon />, style: { backgroundColor: '#ff8a65' } },
    { label: '', icon: <InfoIcon />, style: { backgroundColor: '#ffb74d' } },
    { label: '', icon: <LocalHospitalIcon />, style: { backgroundColor: '#81c784' } },
    { label: '', icon: <PetsIcon />, style: { backgroundColor: '#9575cd' } },
    { label: '', icon: <RoofingIcon />, style: { backgroundColor: '#64b5f6' } },
    { label: '', icon: <EmailIcon />, style: { backgroundColor: '#e57373' } },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <AppBar position="static" className="app-bar stickyFooter" >
          <Toolbar className="toolbar">
            <Typography variant="body1" color="inherit">
              © {currentYear} - <a href="https://daveymason.com">daveymason.com</a>
            </Typography>
            <GroupButton buttons={buttons} />
          </Toolbar>
        </AppBar>
        
     </footer>
    </>
  )
}
