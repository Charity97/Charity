import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Charity | Software Developer</title>
        <meta name="description" content="I’m l" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Contact />
    </div>
  )
}
