import '../styles/globals.css'

import { KryptoGazeProvider } from '../context/context'

function MyApp({ Component, pageProps }) {

  return( <KryptoGazeProvider>
    <Component {...pageProps} />
  </KryptoGazeProvider>) 
}

export default MyApp
