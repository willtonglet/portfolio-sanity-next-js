import Head from 'next/head';
import NavBar from '../NavBar';

import Context from '@context';

const Layout: React.FC<PageProps> = ({ children, content }) => {
    return (
        <Context.Provider value={{ content }}>
            <Head>
                <title>William Tonglet - Front-End Developer e Ui-Designer</title>
                <meta name="description" content="Front-End Developer e Ui-Designer" />
                <meta name="author" content="William Ferreira Tonglet" />
            </Head>
            <main>
                <NavBar
                    routes={(content.content as unknown) as Array<RouteProps>}
                    social={(content.social as unknown) as Array<SocialProps>}
                />
                {children}
            </main>
        </Context.Provider>
    );
};

export default Layout;
