import styles from './Header.module.scss';

import appFeedLogo from '../assets/app-feed-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={appFeedLogo} alt="App Feed Logo" />
            <strong>App Feed</strong>
        </header>
    );
}