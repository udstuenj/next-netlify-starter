import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        updated 5/22/2023 <br />
        <Link href="https://www.yourworldoftext.com/~judstn/guestbook">
        guestbook
        </Link> 
      </footer>
    </>
  )
}
