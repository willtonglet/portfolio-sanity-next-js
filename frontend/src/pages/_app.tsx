import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
