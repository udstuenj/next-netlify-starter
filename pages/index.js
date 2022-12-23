import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>judstn - enjoy :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="WELCOME TO JERRY UDSTUEN'S WEBSITE FOR CONNECTION, EXPRESSION, AND ANYTHING ELSE" />
        <p className="description">
          i love correspondance <br /> feel free to contact me <br /> judstn@gmail.com <br /> on-request, i can add you to my personal newsletter
        </p>
      </main>

      <Footer />
    </div>
  )
}
