import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        site updated 12/13/2023 -&nbsp;
        <br /> <Link href="https://www.yourworldoftext.com/~judstn/guestbook">
        guestbook
        </Link>
        <br />
        pgp: https://pgp.mit.edu/pks/lookup?op=vindex&search=0xC773E9A67D510502
      </footer>
    </>
  )
}
