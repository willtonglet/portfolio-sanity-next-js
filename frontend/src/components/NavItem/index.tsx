interface NavProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavProps> = (props) => {
    const { href, children, onClick, className } = props;

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
};

export default NavItem;
