import Head from 'next/head'
import Footer from '@components/Footer'
import Jumbotron from '@components/Jumbotron.jsx'
import Intro from '@components/Intro.jsx'
import { Grid } from '@mui/material'
import MenuComponent from '@components/MenuComponent'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kangal</title>
        <link rel="icon" href="/logoWhite.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

      </Head>
      <MenuComponent />
      <Grid container sx={{p:5, mt:5}} className="introSectionHome">
        <Grid item xs={4} sm={5} sx={{mt:5}}>
        <Intro
          title="Kangal"
          text="The Kangal Dog is a large, brave and loyal breed originating from Turkey. These majestic dogs are known for their protective nature and have been used for centuries to guard sheep and other livestock. They are highly intelligent and easily trained, making them excellent working dogs. This website is dedicated to providing information about Kangal Dogs, including their history, physical characteristics, and unique personality traits. Whether you are looking for a loyal guardian for your property or a loyal companion for your family, the Kangal Dog may be the perfect fit."
        />
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sm={7} sx={{mt:5}}/> */}
      <Grid sx={{p:5, mt:5}}>
        <Grid item xs={12} sm={5} sx={{mt:5}}>
        <Jumbotron
          title="Kangal or Anatolian Shepherd?"
          text="The Kangal Dog and Anatolian Shepherd are both large, brave and loyal breeds that originate from Turkey. However, they do have some differences. The Kangal Dog is known for its protective nature and has been used for centuries to guard sheep and other livestock. They are highly intelligent and easily trained, making them excellent working dogs. On the other hand, the Anatolian Shepherd is a versatile breed that excels at many tasks, including guarding livestock, hunting, and performing as a rescue dog. They are also known for their independent nature and strong will. If you are looking for a loyal guardian for your property or a versatile companion, either of these breeds may be a good fit for you."
        />
        </Grid>
      </Grid>
      
      <Footer />
    </div>
  )
}
