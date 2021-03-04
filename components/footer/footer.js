import FooterStyle from '../../styles/navFooter.module.css'


export default function Footer() {
  return (
      <div className={FooterStyle.footer}>
        <footer className={FooterStyle.container} >
          <a href='http://www.facebook.com'><h2>facebook</h2></a>
          <a href='http://www.instagram.com'><h2>instagram</h2></a>
          <a href='http://www.twitter.com'><h2>twitter</h2></a>
          <a href='#'><h2>contact me!</h2></a>
        </footer>
      </div>
  )
}
