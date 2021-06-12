import { FC } from 'react';
import ListItem from '../ListItem/ListItem.component';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isNavbarVisible: boolean;
  toggleNavbarVisibility: any;
}

const Sidebar: FC<SidebarProps> = ({
  isNavbarVisible,
  toggleNavbarVisibility
}) => {
  const renderSidebar = () => {
    return (
      <nav className={styles.sidebar}>
        <button
          className={styles.closeButton}
          type={'button'}
          onClick={toggleNavbarVisibility}
        >
          X
        </button>
        <Link href={'/'}>
          <a>
            <ListItem label={'HOME'} />
          </a>
        </Link>
        <Link href={'/PushUpCounter'}>
          <a>
            <ListItem label={'PUSH-UP COUNTER'} />
          </a>
        </Link>
        <Link href={'/About'}>
          <a>
            <ListItem label={'ABOUT'} />
          </a>
        </Link>
      </nav>
    );
  };

  const renderHamburgerMenuIcon = () => {
    return (
      <button
        className={styles.hamburgerMenuIcon}
        onClick={toggleNavbarVisibility}
      >
        Show Sidebar
      </button>
    );
  };

  return <>{isNavbarVisible ? renderSidebar() : renderHamburgerMenuIcon()}</>;
};

export default Sidebar;
