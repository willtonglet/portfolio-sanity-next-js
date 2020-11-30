import NavItem from '@components/NavItem';
import TypeEffect from '@components/TypeEffect';
import Background from '@components/Background';
import { content } from '@core/helpers/content';
import imageResolve from '@core/helpers/imageResolve';

import classes from './styles.module.scss';

const MainSection: React.FC<SectionProps> = ({ id }) => {
    const social = (content('social') as unknown) as Array<SocialProps>;

    const letters = (content('cover') as unknown) as Array<{ title: string }>;

    return (
        <section className={classes.mainSection} id={id}>
            <Background />
            <TypeEffect messages={letters.map((l) => l.title)} />
            <div className={classes.social}>
                {social.map((item, index) => {
                    return (
                        <a
                            href={item.url}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={item.title}>
                            <img
                                src={imageResolve(item.icon).size(20, 20).url() as string}
                                width={20}
                                height={20}
                                alt={item.title}
                            />
                            <span>{item.title}</span>
                        </a>
                    );
                })}
            </div>
            <NavItem href="#sobre" aria-label="Role para baixo">
                <span className={classes.sd}>Clique e saiba mais</span>
            </NavItem>
        </section>
    );
};

export default MainSection;
