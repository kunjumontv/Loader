// import '../styles/globals.css'

import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, []);

  return <>{!loading ? <Component {...pageProps} /> : <Loader />}</>;
}

export default MyApp;
