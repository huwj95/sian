//
// import Layout from '../../components/layout/layout'
// import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
//
//
//
// export default function View( { postData } ){
//
//   // console.log(allPostsData)
//   // const postArray = (tag) => allPostsData.filter(item => item.data.tags.includes(tag))
//   // console.log(postArray(zebra))
//
//
//
//
//   // return(
//   //   <Layout>
//   //     {postArray('zebra').map(({id, title, quote}) => (
//   //       <p>{title}<br />
//   //       {quote}<br />
//   //       {id}<br /></p>
//   //     )}
//   //   </Layout>
//   // )
//
//
//   return(
//    <h1>
//     content
//   </h1>  )
// }
//
//
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
//
// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData} from '../../lib/posts'
import ArticleStyle from '../../components/article/article.module.css'
import Image from 'next/image'

export default function Post({ postData }) {

  const imageUrl = (input) => {
    if(input.imageUrl){
      return input.imageUrl
    }
      return '/../public/images/profile.jpg'
  }

//   return (
//     <Layout>
//     <section className={ArticleStyle.articleContainer}>
//       <article className={ArticleStyle.article}>
//         <heading className={ArticleStyle.heading}>
//           <div className={ArticleStyle.title}>
//             <h2>{postData.title}</h2><br />
//             {postData.quote}
//           </div>
//           //<Image src={imageUrl(postData)} alt={postData.imageAlt} width='200px' height='200px'/>
//         </heading>
//         <br />
//         <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
//
//       </article>
//     </section>
//     </Layout>
//   )
// }

return <h1>contnt</h1>}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// export async function getStaticProps( {params} ) {
//   const allPostsData = getSortedPostsData(params.id)
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
