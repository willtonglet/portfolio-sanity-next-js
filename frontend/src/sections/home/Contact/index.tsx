import { Fade, Flip } from 'react-reveal';
import BlockContent from '@sanity/block-content-to-react';

import { Mail } from '@components/Icons';
import NavItem from '@components/NavItem';
import { content } from '@core/helpers/content';
import imageResolve from '@core/helpers/imageResolve';

import classes from './styles.module.scss';

const Contact: React.FC<SectionProps> = (props) => {
    const social = (content('social') as unknown) as Array<SocialProps>;
    return (
        <section className={classes.contact} {...props}>
            <div className={classes.left}>
                <Fade left delay={1000}>
                    <div className={classes.box1} />
                </Fade>
                <Flip left>
                    <div className={classes.box2}>
                        <Fade top delay={1000}>
                            <Mail width="80" height="80" fill="#fff" />
                        </Fade>
                    </div>
                </Flip>
            </div>
            <div className={classes.right}>
                <div className={classes.wrap}>
                    <Fade bottom cascade delay={100}>
                        <h2>{content('contact.title')}</h2>
                    </Fade>
                    <Fade delay={1000}>
                        <BlockContent blocks={content('contact.description')} />
                    </Fade>

                    <div className={classes.social}>
                        {social.map((item, index) => {
                            return (
                                <Fade left big key={index} delay={400 + index * 100}>
                                    <a href={item.url} aria-label={item.title}>
                                        <img
                                            src={
                                                imageResolve(item.icon).size(20, 20).url() as string
                                            }
                                            width={20}
                                            height={20}
                                            alt={item.title}
                                        />
                                        <span>{item.title}</span>
                                    </a>
                                </Fade>
                            );
                        })}
                    </div>
                </div>
            </div>
            <NavItem href="#home" aria-label="Voltar ao início">
                <span className={classes.sd}>Voltar ao início</span>
            </NavItem>
        </section>
    );
};

export default Contact;
