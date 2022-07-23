import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

export const NavbarHeader = () => {
    return(
        <Link href={'/'}>
            <h1 className={styles['header']}>
                {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </h1>
        </Link>
    )
}