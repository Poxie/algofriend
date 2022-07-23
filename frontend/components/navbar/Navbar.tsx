import styles from '../../styles/Navbar.module.scss';
import { NavbarHeader } from './NavbarHeader';
import { NavbarTabs } from './NavbarTabs';

export const Navbar = () => {
    return(
        <div className={styles['container']}>
            <NavbarHeader />
            <NavbarTabs />
        </div>
    )
}