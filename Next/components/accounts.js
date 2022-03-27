import styles from './accounts.module.css'
import MainNavigation from './MainNavigation';

export default function Accounts({ children }) {
    
    return (
        <div className={styles.container}>
            <MainNavigation />
            {children}
        </div>
    )
}