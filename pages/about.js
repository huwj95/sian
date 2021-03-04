import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import Image from 'next/image'
import Style from '../styles/about.module.css'

export default function About() {

  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={Style.aboutSection}>
        <Image src="/../public/images/profile.jpg" alt="Profile picture" width='200' height='200' className={Style.profile} />
        <div className={Style.words}>
          <h1>HI   I'M   SIAN</h1>
          <h2>I'm writing some stuff</h2>
        </div>

      </section>
    </Layout>
  )
}
