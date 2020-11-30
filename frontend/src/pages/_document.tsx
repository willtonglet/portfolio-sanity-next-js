import Document, { Html, Main, Head, NextScript } from 'next/document';

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="icon" type="image/x-icon" href="./logo.svg" />
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
