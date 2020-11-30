interface SectionProps {
    id?: string;
}

interface PageProps {
    content: ContentInterface;
}

interface ContentInterface {
    [key: string]: string | ContentInterface;
}

interface RouteProps {
    title: string;
    slug: { [key: string]: string };
}

interface SocialProps {
    title: string;
    url: string;
    icon: string;
}

interface Portfoliointerface {
    image: string;
    thumb: string;
    title: string;
    list: Array<string>;
}

declare module 'vanta/dist/vanta.waves.min';
declare module 'react-reveal';
