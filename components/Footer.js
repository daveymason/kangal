import styles from './Footer.module.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import MenuComponent from '@components/MenuComponent'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <AppBar position="static" color="transparent">
    <MenuComponent />
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Kangal
            </Typography>
          </Toolbar>
        </AppBar>
        
     </footer>
    </>
  )
}
