import Head from 'next/head'
import Footer from '@components/Footer'
import Jumbotron from '@components/Jumbotron.jsx'
import Intro from '@components/Intro.jsx'
import { Grid } from '@mui/material'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kangal</title>
        <link rel="icon" href="/bg.jpg" />
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

      </Head>
      <Grid container sx={{p:5}}>
        <Grid item xs={12} sm={5} sx={{mt:5}}>
          <Jumbotron />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} sx={{mt:5}}/>
      <Footer />
    </div>
  )
}
