import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { KryptoGazeProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {

  return( <KryptoGazeProvider>
    <Component {...pageProps} />
  </KryptoGazeProvider>) 
}

export default MyApp
