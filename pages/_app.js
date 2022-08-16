import '../styles/globals.css'
import { ContextProvider } from '../lib/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp
