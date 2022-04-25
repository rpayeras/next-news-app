import Head from "next/head"
import Link from "next/link"
import { useRouter } from 'next/router'

export const PageLayout = ({children, title = ''}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="App with Next Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* <button onClick={() => router.push('/article/artic2')} >Go articles</button> */}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
