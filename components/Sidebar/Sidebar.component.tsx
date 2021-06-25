import { FC, Fragment } from 'react';
import ListItem from '../ListItem/ListItem.component';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import HamburgerIcon from '../Icons/HamburgerIcon.component';
import CloseIcon from '../Icons/CloseIcon.component';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isNavbarVisible: boolean;
  toggleNavbarVisibility: any;
}

export const sidebarVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    transition: {
      duration: 1
    }
  },
  visible: {
    opacity: 1,
    x: 0
  }
};

export const hamburgerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring'
    }
  }
};

const Sidebar: FC<SidebarProps> = ({
  isNavbarVisible,
  toggleNavbarVisibility
}) => {
  const renderSidebar = () => {
    return (
      <motion.nav
        className={styles.sidebar}
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
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
      </motion.nav>
    );
  };

  const renderHamburgerMenuIcon = () => {
    return (
      <motion.div
        className={styles.hamburgerMenuIcon}
        onClick={toggleNavbarVisibility}
        variants={hamburgerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <HamburgerIcon height={60} width={60} />
      </motion.div>
    );
  };

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        {isNavbarVisible ? renderSidebar() : renderHamburgerMenuIcon()}
      </AnimatePresence>
    </Fragment>
  );
};

export default Sidebar;
