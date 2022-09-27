import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
