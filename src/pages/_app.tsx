import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme}>
      <main  className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
