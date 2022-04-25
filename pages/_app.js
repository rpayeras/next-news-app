import { createContext } from 'react'
import '../styles/globals.css'

const ThemeContext = createContext('dark')

function MyApp({ Component, pageProps }) {
  return (
  <ThemeContext.Provider value='dark'>
    <Component {...pageProps} />
  </ThemeContext.Provider>
  )
}

export default MyApp
