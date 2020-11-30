import { useState } from 'react';
import Image from 'next/image';

import { Zoom } from '@components/Icons';
import PortfolioModal from '@components/PortfolioModal';
import Spinner from '@components/Spinner';
import imageResolve from '@core/helpers/imageResolve';

import classes from './styles.module.scss';

const PortfolioItem: React.FC<Portfoliointerface> = (props) => {
    const { title, list, image, thumb } = props;
    const [open, setIsOpen] = useState(false);

    return (
        <div className={classes.item}>
            <Spinner className={classes.spinner} />
            <Image
                src={imageResolve(thumb as string).url() as string}
                width={420}
                height={420}
                layout="responsive"
                className={classes.image}
                alt={title}
            />
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
