import { FC } from 'react';
import ListItem from '../ListItem/ListItem.component';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import HamburgerIcon from '../Icons/HamburgerIcon.component';
import CloseIcon from '../Icons/CloseIcon.component';

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
        <div className={styles.closeButton} onClick={toggleNavbarVisibility}>
          <CloseIcon width={20} height={20} />
        </div>
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
      <div
        className={styles.hamburgerMenuIcon}
        onClick={toggleNavbarVisibility}
      >
        <HamburgerIcon height={60} width={60} />
      </div>
    );
  };

  return <>{isNavbarVisible ? renderSidebar() : renderHamburgerMenuIcon()}</>;
};

export default Sidebar;
