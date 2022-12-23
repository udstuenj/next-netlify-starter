import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>judstn - enjoy :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel className='main-slide'>
                <div>
                    <img src="mountbigelowAT.png" height='1108' width='1478' imageFit='contain'/>
                </div>
                <div>
                    <img src="IMG_7282.png" height='1108' width='831' imageFit='contain'/>
                </div>
                <div>
                    <img src="IMG_8892.png" height='1108' width='1662' imageFit='contain'/>
                </div>
                <div>
                    <img src="thailandgroup.png" height='1108' width='1478' imageFit='contain'/>
                </div>
            </Carousel>
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

