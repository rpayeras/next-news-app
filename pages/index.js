import styles from '../styles/Home.module.css'

import { PageLayout } from '../components/PageLayout'
import Image from 'next/image'

export default function Home({articles = []}) {
  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        {
          articles.length === 0 && <p>Loading...</p>
        }

        {
          articles.length > 0 && articles.map((article, index) => (
          <article key={article.publishedAt}>
            <Image src={`/api/imageproxy?url=${encodeURIComponent(article.urlToImage)}`} 
              width={450} 
              height={250}
              layout="responsive"
              alt={`Image for the article ${article.title}`} 
              priority={index < 2}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </article>
          ))}
        
      </div>
    </PageLayout>
  )
}

//This execute on server on every page load

// export async function getServerSideProps() {
//   try{
//     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
//     const {articles} = await response.json()
    
//     return {
//       props: {
//         articles
//       }
//     }
//   } catch(err){
//     console.log(err)
//     return {
//       props: {
//         articles: []
//       }
//     }
//   }
// }

//It executes only in build time or refreshing page
export async function getStaticProps() {
  try{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
    const {articles} = await response.json()
    
    return {
      props: {
        articles
      }
    }
  } catch(err){
    console.log(err)
    return {
      props: {
        articles: []
      }
    }
  }
}