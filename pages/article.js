import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import ArticleStyle from '../styles/article.module.css'
import { getSortedPostsData } from '../lib/posts'




export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}




export default function Article({allPostsData}) {

const post = allPostsData[0]
const imageUrl = `${post.imageUrl}`
//const url = window.location.href
//const slug = url 

  return (
    <Layout article>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={ArticleStyle.articleContainer}>
        <article className={ArticleStyle.article}>
          <heading className={ArticleStyle.heading}>
            <div className={ArticleStyle.title}>
              <h2>{post.id}</h2><br />
              {post.quote}
            </div>
            <Image src='/../public/images/profile.jpg' width='200px' height='200px'/>
          </heading>
          <br />
          {post.content}<br />

        </article>
      </section>
    </Layout>
  )
}
