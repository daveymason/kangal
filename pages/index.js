import Head from "next/head";
import Footer from "@components/Footer";
import Jumbotron from "@components/Jumbotron.jsx";
import Intro from "@components/Intro.jsx";

import { Grid, AppBar, Button, IconButton, Toolbar, ButtonGroup, Radio } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import RoofingIcon from '@mui/icons-material/Roofing';
import EmailIcon from '@mui/icons-material/Email';

import React, { useState } from "react";

import classNames from 'classnames';

import { LanguageContext } from 'context/LanguageContext';
import { useContext } from 'react';

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
    'app-bar': true,
    'sticky': true,  });

  const toolbarClass = 'toolbar';
  const linkClass = classNames({
    'link': true,
    'link-hover': true,
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

        </div>
      </Grid>
      </Toolbar>
      </AppBar>

      <Grid item xs={4} sm={5} sx={{ mt: 3, p:5 }}>
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
    </ Grid>

        <Grid container sx={{ p: 5 }} className="about">

          <Grid item xs={4} sm={5} sx={{ mt: 3 }}>
            {language === "english" ? (
            <Jumbotron
              title="Kangal or Anatolian Shepherd?"
              text="The Kangal Dog and Anatolian Shepherd are both large, brave and loyal breeds that originate from Turkey. However, they do have some differences. The Kangal Dog is known for its protective nature and has been used for centuries to guard sheep and other livestock. They are highly intelligent and easily trained, making them excellent working dogs. On the other hand, the Anatolian Shepherd is a versatile breed that excels at many tasks, including guarding livestock, hunting, and performing as a rescue dog. They are also known for their independent nature and strong will. If you are looking for a loyal guardian for your property or a versatile companion, either of these breeds may be a good fit for you."
            />
            ) : (
            <Jumbotron
              title="Kangal veya An itolian Shepherd?"
              text="Kangal Köpeği ve Anadolu Öncüsü hem Türkiye'den kökenli, büyük, cesur ve sadık ırklarıdır. Ancak, aralarında bazı farklılıklar vardır. Kangal Köpeği koruyucu doğası ile bilinir ve yüzyıllardır koyun ve diğer hayvanları koruyan çalışan köpekler olarak kullanılmıştır. Özelikle çok zeki ve kolay eğitilebilirler, bu nedenle mükemmel çalışma köpekleridir. Diğer yandan, Anadolu Öncüsü çeşitlilik gösteren bir ırktır ve koyun koruma, av ve kurtarma gibi çok sayıda görevde uzmanlaşmıştır. Ayrıca, özgür ruhlu ve güçlü bir karakterleri olduğu bilinir. Eğer mülkünüzü koruyan sadık bir güvenlik veya çeşitli ortamlarda başarılı bir eş arıyorsanız, bu ırkların herhangi biri size uygun olabilir."
            />
            )}
          </Grid>

          <Grid item xs={4} sm={5} sx={{ mt: 3 }}>
            {language === "english" ? (
                          <Jumbotron
                          title="History"
                          text="The Kangal Dog is a large, brave and loyal breed originating from Turkey. These majestic dogs are known for their protective nature and have been used for centuries to guard sheep and other livestock. They are highly intelligent and easily trained, making them excellent working dogs. This website is dedicated to providing information about Kangal Dogs, including their history, physical characteristics, and unique personality traits. Whether you are looking for a loyal guardian for your property or a loyal companion for your family, the Kangal Dog may be the perfect fit."
                        />
            ) : (
                          <Jumbotron
                          title="Tarih"
                          text="Kangal Köpeği Türkiye'den kökenli, büyük, cesur ve sadık bir ırktır. Bu büyüleyici köpekler koruyucu doğası ile bilinir ve yüzyıllardır koyun ve diğer hayvanları koruyan çalışan köpekler olarak kullanılmıştır. Özelikle çok zeki ve kolay eğitilebilirler, bu nedenle mükemmel çalışma köpekleridir. Bu web sitesi Kangal Köpeklerinin tarihini, fiziksel özelliklerini ve benzersiz kişilik özelliklerini içeren bilgiler sunmak üzere odaklanmıştır. Eğer mülkünüzü koruyan sadık bir güvenlik veya aileniz için sadık bir eş arıyorsanız, Kangal Köpeği tam size göre olabilir."
                        />
            )}
          </Grid>

          <Grid item xs={4} sm={5} sx={{ mt: 3 }}>

  {language === "english" ? (
    <Jumbotron
      title="History of the Kangal Dog"
      text="The Kangal Dog is a breed that has a long and rich history. They are native to the Sivas province of Turkey and have been used for centuries to guard sheep and other livestock. The breed was officially recognized by the Turkish Republic in the early 20th century and has since gained popularity around the world. Despite their large size and intimidating appearance, Kangal Dogs are known for their gentle and protective nature. They are highly intelligent and easily trained, making them excellent working dogs."
    />
  ) : (
    <Jumbotron
      title="Kangal Köpeğinin Tarihi"
      text="Kangal Köpeği, uzun ve zengin bir tarihi olan bir ırktır. Türkiye'nin Sivas ilinde yer alır ve yüzyıllardır koyun ve diğer hayvanları koruyan çalışan köpekler olarak kullanılmıştır. 20. yüzyılın başlarında Türkiye Cumhuriyeti tarafından resmi olarak tanınan ırk, dünya çapında popülerlik kazanmıştır. Büyük boyları ve korkutucu görünümlerine rağmen, Kangal Köpekleri nazik ve koruyucu doğalarıyla bilinir. Özelikle çok zeki ve kolay eğitilebilirler,
      bu nedenle mükemmel çalışma köpekleridir."
    />
  )}
        </Grid>
        </Grid>

        <Footer />
     
      </LanguageContext.Provider>
  );
}
