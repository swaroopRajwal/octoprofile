import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppWrapper from '../components/AppWrapper'
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <AppWrapper>
      <Toaster/>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
