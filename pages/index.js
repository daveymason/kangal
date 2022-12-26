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

import React, { useState } from "react";

import classNames from "classnames";

import { LanguageContext } from "context/LanguageContext";

export default function Home() {
  const [language, setLanguage] = useState("english");

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
                {language === "english" ? "About" : "Hakkında"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <LocalHospitalIcon />
                {language === "english" ? "Health" : "Sağlık"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <PetsIcon />
                {language === "english" ? "Age" : "Yaş"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <RoofingIcon />
                {language === "english" ? "Rescue" : "Kurtarma"}
              </Button>
              <Button color="inherit" className={linkClass}>
                <EmailIcon />
                {language === "english" ? "Contact" : "İletişim"}
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
              text="This website is focused on providing information and resources related to Kangal dogs, a breed native to Turkey. It includes information about the breed's history, characteristics, and suitability as a pet. It also provides resources for those interested in adopting or rescuing a Kangal, including information on reputable breeders and rescue organizations. The website also includes a section on health and care for Kangal dogs, with tips on nutrition, exercise, and common health issues to be aware of. Overall, the goal of the website is to promote the responsible ownership of Kangal dogs and to provide a helpful resource for those interested in this breed"
            />
          ) : (
            <Intro
              title="Kangal"
              text="Bu web sitesi, Türkiye'nin yerli bir ırkı olan Kangal köpekleriyle ilgili bilgi ve kaynaklar sunmak üzere odaklanmıştır. Bu ırkın tarihini, özelliklerini ve evcil hayvan olarak uygunluğunu içeren bilgileri içerir. Ayrıca, Kangal sahiplenmeyi veya kurtarma işlemini ilgilenenler için kaynaklar da sunar, dürüst üreticiler ve kurtarma kuruluşları hakkında bilgiler de dahil olmak üzere. Web sitesi ayrıca, Kangal köpeklerinin sağlık ve bakımıyla ilgili bir bölüm de içerir, beslenme, egzersiz ve bilinmesi gereken yaygın sağlık sorunları hakkında ipuçları verir. Genel olarak, web sitesinin amacı, Kangal köpeklerinin sorumlu sahiplenimini teşvik etmek ve bu ırkla ilgilenenler için yararlı bir kaynak sağlamaktır."
            />
          )}
        </Grid>
      </Grid>

      <Grid container className="about">
        <Grid item xs={1} />
        <Grid item xs={10}>
          {language === "english" ? (
            <Jumbotron
              title="Kangal or Anatolian Shepherd?"
              text="The Kangal Dog and Anatolian Shepherd are both large, loyal breeds from Turkey used for protection and various tasks. Kangal Dogs are intelligent and easily trained livestock guardians, while Anatolian Shepherds excel at many tasks including livestock guarding, hunting, and rescue work. They also have a strong will and independent nature. Both breeds make good guardians and companions. This website will use Kangal but that may include certain Anatolian Shepherd dogs as well."
            />
          ) : (
            <Jumbotron
              title="Kangal veya An itolian Shepherd?"
              text="Kangal Köpeği ve Anadolu Öncüsü, hem Türkiye kökenli büyük, cesur ve sadık ırklarıdır. Ancak, aralarında bazı farklılıklar vardır. Kangal Köpeği, koruyucu doğası ile bilinir ve yüzyıllardır hayvanları koruyan çalışan köpekler olarak kullanılmıştır. Öte yandan, Anadolu Öncüsü daha çok yönlü bir ırktır ve koyun koruma, av ve kurtarma gibi çok sayıda görevde uzmanlaşmıştır. Ayrıca bağımsız bir doğa ve güçlü bir istek ile de bilinirler. Eğer bir özel sahiplenmek istiyorsanız veya çok yönlü bir arkadaş arıyorsanız, bu ırklardan herhangi birisi için uygun olabilir."
            />
          )}
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={6}>
          <img src="/kangal.jpg" alt="Kangal" className="boxedContent" />
          <img src="/anatolian.jpg" alt="Anatolian" className="boxedContent" />
        </Grid>

        <Grid item xs={4} className="boxedContent">
          {language === "english" ? (
            <>
              <Typography
                variant="h4"
                component="h3"
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
                  <ListItemText primary="Kangal Dogs are generally larger and heavier than Anatolian Shepherds" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs have a shorter, thicker coat compared to the longer, finer coat of Anatolian Shepherds" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Dogs are known for their gentle and protective nature, while Anatolian Shepherds are known for their independent nature and strong will" />
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
                Hızlı Bilgiler
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Köpeği, Türkiye'nin Sivas ilinde yer alan özel bir ırk iken, Anadolu Öncüsü, Türkiye'nin yerli koyun köpeklerini tanımlayan daha genel bir terimdir." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Köpeği, koruyucu doğası ile bilinir ve yüzyıllardır hayvanları koruyan çalışan köpekler olarak kullanılırken, Anadolu Öncüsü daha çok yönlü bir ırktır ve koyun koruma, av ve kurtarma gibi çok sayıda görevde uzmanlaşmıştır." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Köpekleri genellikle Anadolu Öncülerinden daha büyük ve ağırdır." />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Köpeklerinin tüyleri, Anadolu Öncülerininkine göre daha kısa ve kalındır" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon fontSize="small">
                    <BulletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kangal Köpeklerinin yumuşak ve koruyucu doğaları bilinirken, Anadolu Öncülerinin özgür ruhlu ve güçlü bir karakterleri vardır" />
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
              text="Kangal Köpeği, eski Anadolu'ya kadar uzanan uzun ve zengin bir geçmişe sahip bir köpek ırkıdır. Türkiye'nin Sivas iline özgüdürler ve yüzyıllardır koyunları ve diğer hayvanları kurtlar ve ayılar gibi yırtıcı hayvanlardan korumak için bekçi olarak kullanılmıştır. Cins, adını öncelikle yetiştirildiği ve bu amaçla kullanıldığı Kangal ilçesinden almıştır.

              20. yüzyılın başlarında, Türkiye Cumhuriyeti Kangal Köpeğini ayrı bir cins olarak resmen tanıdı. Cinsin popülaritesi 20. yüzyılın ikinci yarısında Türkiye'nin ötesine yayılmaya başladı ve bugün dünya çapında çeşitli köpek kulübeleri ve cins kayıtları tarafından tanınmaktadır.
              
              Kangal Köpekleri bekçilik görevinin yanı sıra arama kurtarma köpeği olarak da kullanılmış, hatta Türk ordusunda çeşitli görevlerde istihdam edilmiştir. Kangal Köpekleri, iri boyutlarına ve ürkütücü görünümlerine rağmen, nazik ve koruyucu yapıları ile tanınırlar ve son derece zekidirler ve kolay eğitilirler, bu da onları mükemmel çalışan köpekler yapar."
            />
          )}
        </Grid>

        <Grid item xs={4}>
        <img src="/oldKangal.jpg" alt="oldKangal" className="boxedContent" width={400}/>
        </Grid>

        <Grid item xs={4} className="boxedContent">
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
                <ListItem sx={{ py: 0 }}>
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
    <ListItemText primary="Kangal Köpekleri, dişi örneklerin 110 pound ve erkek örneklerin 145 pound ağırlığına kadar çıkan büyük bir ırktır." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal Köpekleri, genellikle tan veya grimsi renkte olan, yüz ve bacaklarında siyah işaretler olan kısa ve kalın bir tüyü vardır." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal Köpekleri, kuvvetli, kaslı vücutları ve güçlü çeneleri ile bilinirler ve sürülerini koruma amacıyla bunları kullanırlar." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal Köpeklerinin yaşam süresi yaklaşık 12-15 yıldır." />
  </ListItem>
  <ListItem sx={{ py: 0 }}>
    <ListItemIcon fontSize="small">
      <BulletIcon />
    </ListItemIcon>
    <ListItemText primary="Kangal Köpekleri zeki ve kolay eğitilebilir ancak zaman zaman inatçı olabilirler ve tutarlı, kararlı bir eğitime ihtiyaç duyarlar." />
  </ListItem>
</List>
            </>
          )}


        </Grid>
      </Grid>

      <Footer />
    </LanguageContext.Provider>
  );
}
