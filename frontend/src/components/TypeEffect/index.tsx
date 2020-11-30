import { useState, useEffect } from 'react';
import classes from './styles.module.scss';

interface TypeProps {
    messages: string[];
}

const CONSTANTS = {
    DELETING_SPEED: 50,
    TYPING_SPEED: 150
};

const TypeEffect: React.FC<TypeProps> = ({ messages }) => {
    const [state, setState] = useState({
        text: '',
        message: '',
        isDeleting: false,
        loopNum: 0,
        TYPING_SPEED: CONSTANTS.TYPING_SPEED
    });

    useEffect(() => {
        let timer: number;
        const handleType = () => {
            setState((cs) => ({
                ...cs,
                text: getCurrentText((cs as unknown) as { [key: string]: string }),
                TYPING_SPEED: getTYPING_SPEED((cs as unknown) as { [key: string]: string })
            }));
            timer = (setTimeout(handleType, state.TYPING_SPEED) as unknown) as number;
        };
        handleType();
        return () => clearTimeout(timer);
    }, [state.isDeleting]);

    useEffect(() => {
        if (!state.isDeleting && state.text === state.message) {
            setTimeout(() => {
                setState((cs) => ({
                    ...cs,
                    isDeleting: true
                }));
            }, 500);
        } else if (state.isDeleting && state.text === '') {
            setState((cs) => ({
                ...cs,
                isDeleting: false,
                loopNum: cs.loopNum + 1,
                message: getMessage(
                    (cs as unknown) as { [key: string]: string },
                    (messages as unknown) as string
                )
            }));
        }
    }, [state.text, state.message, state.isDeleting, messages]);

    const getCurrentText = (currentState: { [key: string]: string }) => {
        return currentState.isDeleting
            ? currentState.message.substring(0, currentState.text.length - 1)
            : currentState.message.substring(0, currentState.text.length + 1);
    };

    const getMessage = (currentState: { [key: string]: string }, data: string) => {
        return data[Number(currentState.loopNum) % Number(data.length)];
    };

    const getTYPING_SPEED = (currentState: { [key: string]: string }) => {
        return currentState.isDeleting ? CONSTANTS.TYPING_SPEED : CONSTANTS.DELETING_SPEED;
    };

    return (
        <h2 className={classes.typeEffect}>
            <span>{state.text}</span>
            <span id="cursor" />
        </h2>
    );
};

export default TypeEffect;
