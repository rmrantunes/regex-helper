import "../styles/globals.css";
import { RegexProvider } from "contexts/RegexContext";

function MyApp({ Component, pageProps }) {
  return (
    <RegexProvider>
      <Component {...pageProps} />
    </RegexProvider>
  );
}

export default MyApp;
