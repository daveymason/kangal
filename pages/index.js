import Head from 'next/head'
import Footer from '@components/Footer'
import Jumbotron from '@components/Jumbotron'

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
      <main>
      <Jumbotron />
      </main>
      <Footer />
    </div>
  )
}
