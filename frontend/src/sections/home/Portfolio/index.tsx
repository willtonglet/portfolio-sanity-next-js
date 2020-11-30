import PortfolioItem from './PortfolioItem';
import { content } from '@core/helpers/content';

import classes from './styles.module.scss';

const Portfolio: React.FC<SectionProps> = (props) => {
    const portfolio = (content('gallery') as unknown) as Array<Portfoliointerface>;

    return (
        <div className={classes.portfolio} {...props}>
            {portfolio.map((item, index) => (
                <PortfolioItem key={index} image={item.image} title={item.title} list={item.list} />
            ))}
        </div>
    );
};

export default Portfolio;
