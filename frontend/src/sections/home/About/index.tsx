import { Fade, Flip } from 'react-reveal';
import BlockContent from '@sanity/block-content-to-react';

import { Code } from '@components/Icons';
import NavItem from '@components/NavItem';
import { content } from '@core/helpers/content';

import classes from './styles.module.scss';
import imageResolve from '@core/helpers/imageResolve';

const About: React.FC<SectionProps> = (props) => {
    return (
        <section className={classes.about} {...props}>
            <div
                className={classes.left}
                style={{
                    backgroundImage: `url(${imageResolve(content('about.image'))
                        .format('jpg')
                        .url()})`
                }}>
                <Fade left delay={1000}>
                    <div className={classes.box1} />
                </Fade>
                <Flip left>
                    <div className={classes.box2}>
                        <Fade top delay={1000}>
                            <Code width="80" height="80" fill="#fff" />
                        </Fade>
                    </div>
                </Flip>
            </div>
            <div className={classes.right}>
                <div className={classes.wrap}>
                    <Fade bottom cascade delay={100}>
                        <h2>{content('about.title')}</h2>
                    </Fade>
                    <Fade delay={1000}>
                        <BlockContent blocks={content('about.description')} />
                    </Fade>
                </div>
            </div>
            <NavItem href="#portfolio">
                <span className={classes.sd}>Veja o Portfólio</span>
            </NavItem>
        </section>
    );
};

export default About;
