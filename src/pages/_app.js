import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Price Fighter - Can you pick the right price?</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
