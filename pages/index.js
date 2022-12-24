import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Page() {
  return <h1>Jerry Udstuen's Personal Website</h1>;
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>judstn - enjoy :)</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
      </Head>
      <Carousel className='main-slide' showThumbs={false} emulateTouch={true} useKeyboardArrows={true} infiniteLoop={true}>
                <div>
                    <img src="mountbigelowAT.png" max-height='1108' width='1478'/>
                </div>
                <div>
                    <img src="IMG_7282.png" max-height='1108' width='831'/>
                </div>
                <div>
                    <img src="IMG_8892.png" max-height='1108' width='1662'/>
                </div>
                <div>
                    <img src="thailandgroup.png" max-height='1108' width='1478'/>
                </div>
            </Carousel>
      <main>
        <Header title="WELCOME TO JERRY UDSTUEN'S WEBSITE FOR CONNECTION, EXPRESSION, AND ANYTHING ELSE"/>
        <p className="description">
          i love correspondance <br /> feel free to contact me <br /> judstn@gmail.com <br /> on-request, i can add you to my personal newsletter <br /> <br /> <br /> <br /> <br /> <br /> creative works coming soon
        </p>
      </main>

      <Footer />
    </div>
  )
}

