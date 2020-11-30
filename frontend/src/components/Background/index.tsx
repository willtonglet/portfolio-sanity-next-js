import { useState, useRef, useEffect } from 'react';
import bgHome from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

import classes from './styles.module.scss';

const Background: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                bgHome({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 300.0,
                    minWidth: 300.0,
                    scale: 1.5,
                    scaleMobile: 1.0,
                    color: 0x880017,
                    shininess: 10.0,
                    waveHeight: 17.5,
                    waveSpeed: 0.5,
                    zoom: 1.2,
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div className={classes.background}>
            <div ref={myRef} className={classes.bg} />
        </div>
    );
};

export default Background;
