import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Providers } from '../store/provider';

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
