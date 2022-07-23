import styles from '../../styles/Navbar.module.scss';
import { NavbarTab } from './NavbarTab';

const tabs = [
    { text: 'Home', path: '/' },
    { text: 'Algorithms', path: '/algorithms' }
];
export const NavbarTabs = () => {
    return(
        <div className={styles['tabs']}>
            {tabs.map(tab => (
                <NavbarTab 
                    text={tab.text}
                    path={tab.path}
                    key={tab.path}
                />
            ))}
        </div>
    )
}