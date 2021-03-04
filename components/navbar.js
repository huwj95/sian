
import NavStyle from '../styles/navFooter.module.css'
import Link from 'next/link'



export default function Navbar() {
  return (
    <div  className={NavStyle.nav}>
      <nav className={NavStyle.container}>
        <Link href="./#"><a><h2>HOME</h2></a></Link>
        <Link href="./about"><a><h2>ABOUT</h2></a></Link>
        <a href="./sex"><h2>SEX</h2></a>
        <a href="#" className={NavStyle.subnav}><h2>RELATIONSHIPS</h2></a>
        <div className={NavStyle.submenu}>
          <a href='#'><h2>submenu</h2></a>
          <a href='#'><h2>submenu</h2></a>
          <a href='#'><h2>submenu</h2></a>
        </div>
        <a href="./book-club"><h2>BOOK CLUB</h2></a>
        <a href="#"><h2>ARCHIVE</h2></a>



      </nav>
    </div>
)
}
