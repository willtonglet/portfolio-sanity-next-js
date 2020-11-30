import { useState } from 'react';
import classes from './styles.module.scss';
import { Zoom } from '@components/Icons';
import PortfolioModal from '@components/PortfolioModal';
import imageResolve from '@core/helpers/imageResolve';

const PortfolioItem: React.FC<Portfoliointerface> = (props) => {
    const { title, list, image } = props;
    const [open, setIsOpen] = useState(false);

    return (
        <div className={classes.item}>
            <img src={imageResolve(image as string).url() as string} alt={title} />
            <div className={classes.container}>
                <button
                    arial-label="Zoom"
                    title="Abrir imagem do site"
                    type="button"
                    className={classes.icon}
                    onClick={() => setIsOpen(true)}>
                    <Zoom aria-hidden="true" width="32" height="32" />
                </button>
                <div className={classes.text}>
                    <span className={classes.title}>{title}</span>
                    <div className={classes.subs}>
                        {list?.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>
            <PortfolioModal
                isOpen={open}
                title={title}
                subtitles={list}
                image={image}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default PortfolioItem;
