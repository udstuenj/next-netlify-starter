import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        site updated 1/30/2025 -&nbsp;
        <br /> <Link href="https://www.yourworldoftext.com/~judstn/guestbook">
        guestbook
        </Link>
        <br />
      </footer>
    </>
  )
}
