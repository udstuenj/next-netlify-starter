import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Page() {
  return <h1>Jerry Udstuen's Website</h1>;
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
          absolutely love correspondance! <br /> feel free to reach out <br /> judstn (at) proton (dot) me <br /> @judstn on telegram <br /> <br /> on-request, you can get added to the monthly newsletter <br /> <br /> <br /> works <br /> <br />
          <Link href="https://drive.google.com/file/d/1XobbFoGdqJBvQt2E2O2ZJ2t6OMrOWbaM/view?usp=sharing">
          monastery of the crimson monks
          </Link> <br />
          <Link href="https://drive.google.com/file/d/1n9Tg6bMWxAt8FgIes6VboMWGq23rBuSX/view?usp=sharing">
          Aklas saga
          </Link> <br />
          <Link href="https://drive.google.com/file/d/1amACi7NW9ivnXJLham4qtBjoy6pm9V4f/view?usp=sharing">
          Soviet militaria sketches
          </Link> <br />
          <Link href="https://drive.google.com/drive/folders/19KEU8ffqrFqJz0I-Gfcu4H5d2iyXHCSg?usp=sharing">
          blacksmithing
          </Link> <br />
          <Link href="https://youtu.be/scMYX4tys3c">
          day in the life - AT 
          </Link> <br /> <br />
          archives <br /> <br />
          <Link href="https://drive.google.com/drive/folders/1nBTqXa__gaAiWKksh33-SgwQrhXpbQDL?usp=sharing">
          ttrpg
          </Link> <br />
          <Link href="https://drive.google.com/drive/folders/11F6AaVdSYF0rKnzcK9HQ97XNoAImVy2k?usp=sharing">
          combat
          </Link> <br />
          <Link href="https://drive.google.com/drive/folders/1h6OuEvW_rqosM319e-94sd9yEvyriSKD?usp=sharing">
          photos
          </Link> <br /> <br />
          friends' works and collaberations<br/>
          <Link href="https://beetheband.com">
          BEE!
          </Link> <br />
          <Link href="https://thisiseclipse.com/">
          ThisisEclipse_
          </Link>
          &nbsp;and our collaberation: <Link href="https://thisiseclipse.com/izdanitchke-2023">
          Izdanitchke
          </Link> <br />
          <Link href="https://docs.google.com/document/d/1GJ8C1A7qcPdIbPoCOiHHUksRpdG3UYeLfsH-gYgfud0/edit?usp=drive_link">
          Chemical Happiness - Michael Peters
          </Link> <br /> <br /> <br />
          pgp:&nbsp;
          <Link href="https://pgp.mit.edu/pks/lookup?op=vindex&search=0xC773E9A67D510502">
          https://pgp.mit.edu/pks/lookup?op=vindex&search=0xC773E9A67D510502
          </Link> <br />
        </p>
      </main>

      <Footer />
    </div>
  )
}

