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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PetsIcon from "@mui/icons-material/Pets";
import RoofingIcon from "@mui/icons-material/Roofing";
import EmailIcon from "@mui/icons-material/Email";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

import React, { useState, useEffect } from "react";

import classNames from "classnames";

import { LanguageContext } from "context/LanguageContext";

import generateText from './openai';

export default function Home() {
  const [language, setLanguage] = useState("english");
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const prompt = 'The quick brown fox jumps over the lazy dog.';
        const length = 50;
        const response = await generateText(prompt, length);
        setGeneratedText(response.data.text);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // alert(event.target.value
    //   ? "Language changed to " + event.target.value
    //   : "Language not changed"
    // );
  };

  const stickyClass = classNames({
    "app-bar": true,
    sticky: true,
  });

  const toolbarClass = "toolbar";
  const linkClass = classNames({
    link: true,
    "link-hover": true,
  });

  return (
    <LanguageContext.Provider value={language}>
      <Head>
        <title>Kangal</title>
        <link rel="icon" href="/logoWhite.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Grid container sx={{ p: 0 }} className="introSectionHome">
        <AppBar position="static" className={stickyClass}>
          <Toolbar className={toolbarClass}>
            <Grid container justifyContent="space-between">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={linkClass}
              >
                <img
                  src="/logoWhite.png"
                  alt="Logo"
                  style={{ height: "3rem" }}
                />
              </IconButton>
              <Button color="inherit" className={linkClass}>
                <InfoIcon />
                {language === "english" ? "About" : "Hakk??nda"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <LocalHospitalIcon />
                {language === "english" ? "Health" : "Sa??l??k"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <PetsIcon />
                {language === "english" ? "Age" : "Ya??"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <RoofingIcon />
                {language === "english" ? "Rescue" : "Kurtarma"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <EmailIcon />
                {language === "english" ? "Contact" : "??leti??im"}
              </Button>
              <div className="language-buttons">
                {/* <LanguageSwitcher /> */}
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
                      <img
                        src="/turkeyIcon.png"
                        alt="Turkish"
                        style={{ height: "1.5rem" }}
                      />
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
              </div>
            </Grid>
          </Toolbar>
        </AppBar>

        <Grid item xs={4} sm={5} sx={{ mt: 3, p: 5 }}>
          {language === "english" ? (
            <Intro
              title="Kangal"
              text="This website is focused on providing information and resources related to Kangal dogs, a breed native to Turkey. It includes information about the breed's history, characteristics, and suitability as a pet. It also provides resources for those interested in adopting or rescuing a Kangal, including information on reputable breeders and rescue organizations. The website also includes a section on health and care for Kangal dogs, with tips on nutrition, exercise, and common health issues to be aware of. Overall, the goal of the website is to promote the responsible ownership of Kangal dogs and to provide a helpful resource for those interested in this breed."
            />
          ) : (
            <Intro
              title="Kangal"
              text="Bu web sitesi, T??rkiye'nin yerli bir ??rk?? olan Kangal k??pekleriyle ilgili bilgi ve kaynaklar sunmak ??zere odaklanm????t??r. Bu ??rk??n tarihini, ??zelliklerini ve evcil hayvan olarak uygunlu??unu i??eren bilgileri i??erir. Ayr??ca, Kangal sahiplenmeyi veya kurtarma i??lemini ilgilenenler i??in kaynaklar da sunar, d??r??st ??reticiler ve kurtarma kurulu??lar?? hakk??nda bilgiler de dahil olmak ??zere. Web sitesi ayr??ca, Kangal k??peklerinin sa??l??k ve bak??m??yla ilgili bir b??l??m de i??erir, beslenme, egzersiz ve bilinmesi gereken yayg??n sa??l??k sorunlar?? hakk??nda ipu??lar?? verir. Genel olarak, web sitesinin amac??, Kangal k??peklerinin sorumlu sahiplenimini te??vik etmek ve bu ??rkla ilgilenenler i??in yararl?? bir kaynak sa??lamakt??r."
            />
          )}
        </Grid>
      </Grid>

      <Grid container className="about">
        <Grid item xs={1} />
        <Grid item xs={10} id="Kangal or AS?">
          {language === "english" ? (
            <Jumbotron
              title="Kangal or Anatolian Shepherd?"
              text="The Kangal Dog and Anatolian Shepherd are both large, loyal breeds from Turkey used for protection and various tasks. Kangal Dogs are intelligent and easily trained livestock guardians, while Anatolian Shepherds excel at many tasks including livestock guarding, hunting, and rescue work. They also have a strong will and independent nature. Both breeds make good guardians and companions. This website will use Kangal but that may include certain Anatolian Shepherd dogs as well."
            />
          ) : (
            <Jumbotron
              title="Kangal veya An itolian Shepherd?"
              text="Kangal K??pe??i ve Anadolu ??nc??s??, hem T??rkiye k??kenli b??y??k, cesur ve sad??k ??rklar??d??r. Ancak, aralar??nda baz?? farkl??l??klar vard??r. Kangal K??pe??i, koruyucu do??as?? ile bilinir ve y??zy??llard??r hayvanlar?? koruyan ??al????an k??pekler olarak kullan??lm????t??r. ??te yandan, Anadolu ??nc??s?? daha ??ok y??nl?? bir ??rkt??r ve koyun koruma, av ve kurtarma gibi ??ok say??da g??revde uzmanla??m????t??r. Ayr??ca ba????ms??z bir do??a ve g????l?? bir istek ile de bilinirler. E??er bir ??zel sahiplenmek istiyorsan??z veya ??ok y??nl?? bir arkada?? ar??yorsan??z, bu ??rklardan herhangi birisi i??in uygun olabilir."
            />
          )}
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={6} id="Images of Kangal and AS">
          <img src="/kangal.jpg" alt="Kangal" className="boxedContent" />
          <img src="/anatolian.jpg" alt="Anatolian" className="boxedContent" />
        </Grid>

        <Grid item xs={4} className="boxedContent">
          {language === "english" ? (
            <>
              <Typography
                variant="h4"
                sx={{ pb: 1, p: 3, color: "#734b2e" }}
              >
                Differences
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="The Kangal Dog is a specific breed that is native to the Sivas province in Turkey, while the Anatolian Shepherd is a more general term used to describe a group of native Turkish sheepdogs." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="The Kangal Dog is known for its protective nature and has been used for centuries as a livestock guardian, while the Anatolian Shepherd is a more versatile breed that excels at many tasks including livestock guarding, hunting, and rescue work." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are generally larger and heavier than Anatolian Shepherds." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs have a shorter, thicker coat compared to the longer, finer coat of Anatolian Shepherds." />
                </ListItem>
                <ListItem sx={{ pt: 0, pb:2 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are known for their gentle and protective nature, while Anatolian Shepherds are known for their independent nature and strong will." />
                </ListItem>
              </List>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                component="h3"
                sx={{ pb: 1, p: 3, color: "#734b2e" }}
              >
                H??zl?? Bilgiler
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal K??pe??i, T??rkiye'nin Sivas ilinde yer alan ??zel bir ??rk iken, Anadolu ??nc??s??, T??rkiye'nin yerli koyun k??peklerini tan??mlayan daha genel bir terimdir." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal K??pe??i, koruyucu do??as?? ile bilinir ve y??zy??llard??r hayvanlar?? koruyan ??al????an k??pekler olarak kullan??l??rken, Anadolu ??nc??s?? daha ??ok y??nl?? bir ??rkt??r ve koyun koruma, av ve kurtarma gibi ??ok say??da g??revde uzmanla??m????t??r." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal K??pekleri genellikle Anadolu ??nc??lerinden daha b??y??k ve a????rd??r." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal K??peklerinin t??yleri, Anadolu ??nc??lerininkine g??re daha k??sa ve kal??nd??r" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal K??peklerinin yumu??ak ve koruyucu do??alar?? bilinirken, Anadolu ??nc??lerinin ??zg??r ruhlu ve g????l?? bir karakterleri vard??r" />
                </ListItem>
              </List>
            </>
          )}
        </Grid>

        <Grid item xs={7}>
          {language === "english" ? (
            <Jumbotron
              title="History of the Kangal"
              text="
              The Kangal Dog is a breed that has a long and rich history dating back to ancient Anatolia. They are native to the Sivas province of Turkey and have been used for centuries as livestock guardians to protect sheep and other animals from predators such as wolves and bears. The breed is named after the town of Kangal, where they were primarily bred and used for this purpose.
              
              In the early 20th century, the Turkish Republic officially recognized the Kangal Dog as a distinct breed. The breed's popularity began to spread beyond Turkey in the latter half of the 20th century, and today they are recognized by various kennel clubs and breed registries around the world.
              
              In addition to their role as livestock guardians, Kangal Dogs have also been used as search and rescue dogs, and they have even been employed by the Turkish military in various roles. Despite their large size and intimidating appearance, Kangal Dogs are known for their gentle and protective nature, and they are highly intelligent and easily trained, making them excellent working dogs."
            />
          ) : (
            <Jumbotron
              title="Kangal veya An itolian Shepherd?"
              text="Kangal K??pe??i, eski Anadolu'ya kadar uzanan uzun ve zengin bir ge??mi??e sahip bir k??pek ??rk??d??r. T??rkiye'nin Sivas iline ??zg??d??rler ve y??zy??llard??r koyunlar?? ve di??er hayvanlar?? kurtlar ve ay??lar gibi y??rt??c?? hayvanlardan korumak i??in bek??i olarak kullan??lm????t??r. Cins, ad??n?? ??ncelikle yeti??tirildi??i ve bu ama??la kullan??ld?????? Kangal il??esinden alm????t??r.

              20. y??zy??l??n ba??lar??nda, T??rkiye Cumhuriyeti Kangal K??pe??ini ayr?? bir cins olarak resmen tan??d??. Cinsin pop??laritesi 20. y??zy??l??n ikinci yar??s??nda T??rkiye'nin ??tesine yay??lmaya ba??lad?? ve bug??n d??nya ??ap??nda ??e??itli k??pek kul??beleri ve cins kay??tlar?? taraf??ndan tan??nmaktad??r.
              
              Kangal K??pekleri bek??ilik g??revinin yan?? s??ra arama kurtarma k??pe??i olarak da kullan??lm????, hatta T??rk ordusunda ??e??itli g??revlerde istihdam edilmi??tir. Kangal K??pekleri, iri boyutlar??na ve ??rk??t??c?? g??r??n??mlerine ra??men, nazik ve koruyucu yap??lar?? ile tan??n??rlar ve son derece zekidirler ve kolay e??itilirler, bu da onlar?? m??kemmel ??al????an k??pekler yapar."
            />
          )}
        </Grid>

        <Grid item xs={4}>
        <img src="/oldKangal.jpg" alt="oldKangal" className="boxedContent" width={400}/>
        </Grid>

        <Grid item xs={6} id="babyKangal">
        <img src="/babyKangal.jpg" alt="babyKangal" className="boxedContent" width={600}/>
        </Grid>

        <Grid item xs={4} className="boxedContent GeneralFacts">
          {language === "english" ? (
            <>
              <Typography
                variant="h4"
                component="h3"
                sx={{ pb: 1, p: 3, color: "#734b2e" }}
              >
                General Facts
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are a large breed, with males weighing up to 145 pounds and females weighing up to 110 pounds." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs have a short, thick coat that is typically tan or gray in color, with black markings on the face and legs." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are known for their strong, muscular bodies and powerful jaws, which they use to protect their flock." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs have a lifespan of about 12-15 years." />
                </ListItem>
                <ListItem sx={{ pt: 0, pb:2 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are intelligent and easily trained, but they may be stubborn at times and require consistent, firm training." />
                </ListItem>
              </List>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                component="h3"
                sx={{ pb: 1, p: 3, color: "#734b2e" }}
              >
                Genel Bilgiler
              </Typography>
              <List>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal K??pekleri, di??i ??rneklerin 110 pound ve erkek ??rneklerin 145 pound a????rl??????na kadar ????kan b??y??k bir ??rkt??r." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal K??pekleri, genellikle tan veya grimsi renkte olan, y??z ve bacaklar??nda siyah i??aretler olan k??sa ve kal??n bir t??y?? vard??r." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal K??pekleri, kuvvetli, kasl?? v??cutlar?? ve g????l?? ??eneleri ile bilinirler ve s??r??lerini koruma amac??yla bunlar?? kullan??rlar." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal K??peklerinin ya??am s??resi yakla????k 12-15 y??ld??r." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal K??pekleri zeki ve kolay e??itilebilir ancak zaman zaman inat???? olabilirler ve tutarl??, kararl?? bir e??itime ihtiya?? duyarlar." />
  </ListItem>
</List>
            </>
          )}


        </Grid>
      </Grid>

      <Grid container spacing={2} className="boxedContent">
      <Button variant="contained" color="primary" onClick={() => setGeneratedText('')}>
        Generate Text
      </Button>
      {error ? (
        <Typography variant="body1" color="error">{error}</Typography>
      ) : (
        <Typography variant="body1">{generatedText}</Typography>
      )}
      </Grid>

      <Footer />
    </LanguageContext.Provider>
  );
}
