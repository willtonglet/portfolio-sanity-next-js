import clsx from 'clsx';
import classes from './styles.module.scss';

interface SpinnerProps {
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    return (
        <div className={clsx(classes.spinner, className)}>
            <div />
            <div />
        </div>
    );
};

export default Spinner;
