import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import NavItem from '../NavItem';
import Logo from '../Icons';
import imageResolve from '@core/helpers/imageResolve';

import classes from './styles.module.scss';

interface NavBarProps {
    routes: Array<RouteProps>;
    social: Array<SocialProps>;
}

const NavBar: React.FC<NavBarProps> = ({ routes, social }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);
    const menu = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menu.current && !menu.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    });

    return (
        <aside ref={menu}>
            <div className={classes.navBar}>
                <div className={classes.logo}>
                    <a
                        href="/#home"
                        onClick={() => {
                            setOpen(false);
                            setActive(-1);
                        }}
                        aria-label="Logo">
                        <Logo />
                    </a>
                </div>
                <button
                    type="button"
                    aria-label="Menu"
                    onClick={() => setOpen(!open)}
                    className={clsx(classes['nav-switch'], open && classes.active)}>
                    <span className={classes['bar-one']} />
                    <span className={classes['bar-two']} />
                    <span className={classes['bar-three']} />
                </button>
            </div>
            <nav className={clsx(classes['mainmenu'], open && classes.active)}>
                <ul className={classes['main-list']}>
                    {routes.map((route, index) => {
                        return (
                            <li key={index}>
                                <NavItem
                                    href={`#${route.slug.current}`}
                                    onClick={() => {
                                        setActive(index);
                                        setOpen(false);
                                    }}
                                    className={clsx(active === index && classes.active)}
                                    aria-label={route.title}>
                                    {route.title}
                                </NavItem>
                            </li>
                        );
                    })}
                </ul>
                <div className={classes.social}>
                    {social.map((item, index) => {
                        return (
                            <a
                                href={item.url}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.title}>
                                <img
                                    src={imageResolve(item.icon).size(20, 20).url() as string}
                                    width={20}
                                    height={20}
                                    alt={item.title}
                                />
                            </a>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
};

export default NavBar;
