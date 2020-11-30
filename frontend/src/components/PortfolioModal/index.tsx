import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Close } from '../Icons';
import imageResolve from '@core/helpers/imageResolve';

import classes from './styles.module.scss';

interface PortfolioModalProps {
    isOpen?: boolean;
    subtitles?: string[];
    title?: string;
    image?: string;
    onClose?: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = (props) => {
    const { title, subtitles, image, onClose, isOpen = false } = props;
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isOpen);
    });

    return (
        <CSSTransition in={open} timeout={300} classNames={classes} unmountOnExit>
            <div className={classes.modal}>
                <button
                    type="button"
                    arial-label="Fechar"
                    className={classes.close}
                    onClick={onClose}
                    onKeyDown={onClose}>
                    <Close fill="#fff" width="30" height="30" />
                </button>
                <div className={classes.container}>
                    <div className={classes.image}>
                        <img src={imageResolve(image as string).url() as string} alt={title} />
                    </div>
                    <div className={classes.text}>
                        <span className={classes.title}>{title}</span>
                        <div className={classes.subs}>
                            {subtitles && subtitles.map((item, i) => <span key={i}>{item}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default PortfolioModal;
