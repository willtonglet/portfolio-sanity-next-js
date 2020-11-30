import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import api from '@core/api';

import Layout from '@components/Layout';
import MainSection from '@sections/home/MainSection';

const About = dynamic(() => import('@sections/home/About'), { ssr: false });
const PortfolioIntro = dynamic(() => import('@sections/home/PortfolioIntro'), { ssr: false });
const Portfolio = dynamic(() => import('@sections/home/Portfolio'), { ssr: false });
const Contact = dynamic(() => import('@sections/home/Contact'), { ssr: false });

const HomePage: NextPage<PageProps> = (props) => {
    return (
        <Layout {...props}>
            <MainSection id="home" />
            <About id="sobre" />
            <PortfolioIntro id="portfolio" />
            <Portfolio id="galeria" />
            <Contact id="contato" />
        </Layout>
    );
};

export const getStaticProps = async (): Promise<ContentInterface> => {
    const content = await api.client.readClient.fetch(`*[_type == "pages"] | order(order)`);
    const social = await api.client.readClient.fetch(`*[_type == "social"] | order(_createdAt)`);
    const cover = await api.client.readClient.fetch(`*[_type == "cover"]{title} | order(order)`);
    const about = await api.client.readClient.fetch(
        `*[_type == "pages"][slug.current == "sobre"][0]`
    );
    const portfolio = await api.client.readClient.fetch(
        `*[_type == "pages"][slug.current == "portfolio"][0]`
    );
    const gallery = await api.client.readClient.fetch(`*[_type == "portfolio"]`);
    const contact = await api.client.readClient.fetch(
        `*[_type == "pages"][slug.current == "contato"][0]`
    );

    return {
        props: {
            content: {
                content,
                about,
                portfolio,
                gallery,
                contact,
                cover,
                social
            }
        }
    };
};

export default HomePage;
