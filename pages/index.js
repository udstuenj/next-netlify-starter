import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import Link from 'next/link'
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
      <Carousel className='main-slide' showThumbs={false} emulateTouch={true} useKeyboardArrows={true} infiniteLoop={true} showStatus= {false}>
                <div>
                    <img src="mountbigelowAT.png" max-height='1108' width='1478' placeholder='blur'/>
                </div>
                <div>
                    <img src="IMG_7282.png" max-height='1108' width='831' placeholder='blur'/>
                </div>
                <div>
                    <img src="IMG_8892.png" max-height='1108' width='1662' placeholder='blur'/>
                </div>
                <div>
                    <img src="thailandgroup.png" max-height='1108' width='1478' placeholder='blur'/>
                </div>
            </Carousel>
      <main>
        <Header title="WELCOME TO JERRY UDSTUEN'S WEBSITE FOR CONNECTION, EXPRESSION, AND ANYTHING ELSE"/>
        <p className="description">
          i love correspondance <br /> feel free to contact me <br /> judstn@proton.me <br /> on-request, i can add you to my personal newsletter <br /> <br /> <br /> <br /> works <br /> <br />
          <Link href="https://drive.google.com/file/d/1n9Tg6bMWxAt8FgIes6VboMWGq23rBuSX/view?usp=sharing">
          Aklas saga
          </Link> <br />
          <Link href="https://drive.google.com/file/d/1amACi7NW9ivnXJLham4qtBjoy6pm9V4f/view?usp=sharing">
          Soviet militaria sketches
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}

