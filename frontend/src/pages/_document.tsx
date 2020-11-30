import Document, { Html, Main, Head, NextScript } from 'next/document';

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="icon" type="image/x-icon" href="./logo.svg" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
                        rel="stylesheet"></link>
                    <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
