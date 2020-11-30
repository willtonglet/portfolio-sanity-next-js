import { Fade, Flip } from 'react-reveal';
import { Devices, Down } from '@components/Icons';
import { content } from '@core/helpers/content';
import BlockContent from '@sanity/block-content-to-react';

import classes from './styles.module.scss';

const PortfolioIntro: React.FC<SectionProps> = (props) => {
    return (
        <section className={classes.portfolioIntro} {...props}>
            <div className={classes.left}>
                <div className={classes.wrap}>
                    <Fade bottom cascade delay={100}>
                        <h2>{content('portfolio.title')}</h2>
                    </Fade>
                    <Fade delay={1000}>
                        <BlockContent blocks={content('portfolio.description')} />
                    </Fade>
                    <Fade top delay={1000}>
                        <a href="#galeria" className={classes.down} aria-label="Portfólio">
                            <Down width="32" height="32" fill="#D02026" />
                        </a>
                    </Fade>
                </div>
            </div>
            <div className={classes.right}>
                <Fade left delay={1000}>
                    <div className={classes.box1} />
                </Fade>
                <Flip left>
                    <div className={classes.box2}>
                        <Fade top delay={1000}>
                            <Devices width="90" height="90" fill="#fff" />
                        </Fade>
                    </div>
                </Flip>
            </div>
        </section>
    );
};

export default PortfolioIntro;
