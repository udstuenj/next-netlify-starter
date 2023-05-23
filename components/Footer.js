import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        updated 5/23/2023 <br />
        <Link href="https://www.yourworldoftext.com/~judstn/guestbook">
        guestbook
        </Link> 
      </footer>
    </>
  )
}
