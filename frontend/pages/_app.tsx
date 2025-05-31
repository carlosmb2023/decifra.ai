import '../styles/globals.css'
import '../styles/futuristic-blog.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-4xl mx-auto p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}