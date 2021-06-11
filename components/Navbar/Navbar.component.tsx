import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export enum Sections {
  HOMEPAGE = '/',
  PUSH_UP_COUNTER = '/PushUpCounter',
  ABOUT = '/About'
}

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [section, setSection] = useState<Sections>(Sections.HOMEPAGE);

  const router = useRouter();

  useEffect(() => {
    switch (router.route) {
      case Sections.HOMEPAGE:
        setSection(Sections.HOMEPAGE);
        break;

      case Sections.PUSH_UP_COUNTER:
        setSection(Sections.PUSH_UP_COUNTER);
        break;

      case Sections.ABOUT:
        setSection(Sections.ABOUT);
        break;

      default:
        setSection(Sections.HOMEPAGE);
    }
  }, [router]);

  const toggleDropdownState = () => {
    setOpenDropdown((prevState) => (prevState ? false : true));
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.header}`}
    >
      <div className="container-fluid">
        <Link href={'/'}>
          <a className="navbar-brand">Workout Assistant</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          onClick={toggleDropdownState}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${openDropdown && 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={'/PushUpCounter'}>
                <a
                  className={`nav-link ${
                    section === Sections.PUSH_UP_COUNTER && 'active'
                  }`}
                  aria-current="page"
                  onClick={toggleDropdownState}
                >
                  Push Up Counter
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/About'}>
                <a
                  className={`nav-link ${
                    section === Sections.ABOUT && 'active'
                  }`}
                  aria-current="page"
                  onClick={toggleDropdownState}
                >
                  About the Developer
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
