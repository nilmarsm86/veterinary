import "../styles/materialize.min.css";
import "../styles/globals.css";
import Theme from "../context/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
