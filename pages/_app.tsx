import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppWrapper from '../components/AppWrapper'
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <AppWrapper>
      <Toaster/>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-white font-bold space text-2xl'>This site is down for a while thanks for checking it out :D</p>
        <p className='text-white font-bold space text-2xl'>regards Swaroop </p>
      </div>
      {/* <Component {...pageProps} /> */}
    </AppWrapper>
  )
}

export default MyApp
