import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/Navbar.module.scss';

export const NavbarTab: React.FC<{
    text: string;
    path: string;
}> = ({ text, path }) => {
    const { asPath } = useRouter();

    const className = [
        styles['tab'],
        asPath === path ? styles['active'] : ''
    ].join(' ');
    return(
        <Link href={path}>
            <span className={className}>
                {text}
            </span>
        </Link>
    )
}