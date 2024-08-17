import Head from "next/head";
import Footer from "@components/Footer";
import Jumbotron from "@components/Jumbotron.jsx";
import Intro from "@components/Intro.jsx";

import {
  Grid,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  ButtonGroup,
  Radio,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BulletIcon from "@mui/icons-material/FiberManualRecord";

import React from "react";

import classNames from "classnames";

export default function Home() {
  const stickyClass = classNames({
    "app-bar": true,
    sticky: true,
  });

  const linkClass = classNames({
    link: true,
    "link-hover": true,
  });

  return (
    <>
      <Head>
        <title>Kangal Security</title>
        <link rel="icon" href="/logoWhite.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <AppBar position="static" className={stickyClass}>
      <Toolbar className="toolbar">
        <Grid container justifyContent="flex-start">
          <IconButton edge="start" color="inherit" aria-label="menu" className={linkClass}>
            <img src="/logoWhite.png" alt="Logo" style={{ height: '3rem' }} />
          </IconButton>
          <Button color="inherit" className="linkClass">
            <InfoIcon sx={{marginRight: '4px'}}/>  About
          </Button>
          <Button color="inherit" className="linkClass">
            <StarBorderIcon sx={{marginRight: '4px'}} /> Features
          </Button>
          <Button color="inherit" className="linkClass">
            <ConstructionIcon sx={{marginRight: '4px'}} />
            Tools
          </Button>
          <Button color="inherit" className="linkClass">
            <AddTaskIcon sx={{marginRight: '4px'}} />
            Compliance
          </Button>
          <Button color="inherit" className="linkClass">
            <ContactSupportIcon sx={{marginRight: '4px'}} />
            Contact
          </Button>
          <div className="language-buttons">
            <ButtonGroup size="small" aria-label="language" color="primary">
              <Radio
                checked={true}
                value="english"
                icon={<img src="/englishIcon.png" alt="English" style={{ height: '1.5rem' }} />}
                checkedIcon={<img src="/englishIcon.png" alt="EnglishChecked" style={{ height: '2.5rem' }} />}
              />
            </ButtonGroup>
          </div>
        </Grid>
      </Toolbar>
      </AppBar>
        

      <Grid container sx={{ p: 0 }} className="introSectionHome">


        <Grid item xs={1} />

        <Grid item xs={10} sm={4} sx={{ mt: 3, p: 5 }}>
          <Intro />
        </Grid>

        <Grid item xs={1} />
      </Grid>

      <Grid container className="about">
        <Grid item xs={1} />
        <Grid item xs={5} id="Kangal Security Suite">
          <Jumbotron
            title="Kangal Security Suite"
            text="Kangal Security is a robust cybersecurity solution suite that offers three core tools, each mirroring the protective nature of the Kangal dog. 'Sniff' focuses on passive reconnaissance, gathering vital information without alerting potential threats. 'Bark' is your early warning system, actively scanning for vulnerabilities and ensuring that your defenses are up to date. 'Bite' takes action, providing automated responses to detected threats and supporting your incident response efforts. All tools are designed with compliance in mind, making Kangal Security your go-to for maintaining both security and regulatory standards."
          />
        </Grid>

        <Grid item xs={6} id="Images of Kangal Security Tools">
          <img src="/kangal.jpg" alt="Kangal" className="boxedContent" />
        </Grid>

        <Grid item xs={6} id="Images of Kangal Security Tools">
          <img src="/logo.png" alt="Kangal" className="boxedContent" />
        </Grid>

        <Grid item xs={5} className="boxedContent">
          <Typography
            variant="h4"
            sx={{ pb: 1, p: 3, color: "#734b2e" }}
          >
            Key Features
          </Typography>
          <List>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Comprehensive Reconnaissance with 'Sniff': Gather detailed intelligence about your target without raising alarms." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Active Vulnerability Scanning with 'Bark': Identify potential threats before they become issues, with a focus on maintaining ISO 27001 compliance." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Automated Defense with 'Bite': Respond instantly to threats with predefined actions to protect your network." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Comprehensive Reporting: Generate detailed reports for audits and ensure compliance with industry standards." />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 2 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="User-Friendly Interface: Seamlessly navigate between tools and manage your security strategy from a unified dashboard." />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={5}>
          <Jumbotron
            title="Why Choose Kangal Security?"
            text="
            Kangal Security combines the power of automated tools with the strategic insight needed to protect modern organizations. Whether you are defending against known vulnerabilities or responding to emerging threats, Kangal Security provides the tools you need to stay one step ahead. Our focus on compliance ensures that while you're protecting your network, you're also meeting all necessary regulatory requirements. Trusted by security professionals, Kangal Security is the robust, reliable solution your organization needs."
          />
        </Grid>

        <Grid item xs={4}>
          <img src="/oldKangal.jpg" alt="Kangal Dog" className="boxedContent" width={400} />
        </Grid>

        <Grid item xs={6} id="Compliance and Reporting">
        <img src="/anatolian.jpg" alt="Anatolian" className="boxedContent" />
        </Grid>

        <Grid item xs={4} className="boxedContent GeneralFacts">
          <Typography
            variant="h4"
            component="h3"
            sx={{ pb: 1, p: 3, color: "#734b2e" }}
          >
            Compliance and Reporting
          </Typography>
          <List>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Kangal Security tools are designed to align with ISO 27001 standards, ensuring your organization meets key compliance requirements." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Automated compliance checks: Identify gaps in your security posture and receive actionable insights for improvement." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Generate detailed reports for audits: Simplify the audit process with ready-to-use reports that highlight compliance and security metrics." />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemIcon fontSize="small">
                <BulletIcon />
              </ListItemIcon>
              <ListItemText primary="Ensure continuous compliance: Stay compliant with evolving regulations and standards, with ongoing monitoring and alerts." />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}