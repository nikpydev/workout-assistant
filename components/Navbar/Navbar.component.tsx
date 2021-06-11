import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export enum Sections {
  HOMEPAGE = '/',
  PUSH_UP_COUNTER = '/PushUpCounter'
}

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [section, setSection] = useState<Sections>(Sections.HOMEPAGE);

  const router = useRouter();

  useEffect(() => {
    setSection(
      router.route === Sections.HOMEPAGE
        ? Sections.HOMEPAGE
        : Sections.PUSH_UP_COUNTER
    );
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
          <a className="navbar-brand" href="#">
            Workout Assistant
          </a>
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
                  href="#"
                  onClick={toggleDropdownState}
                >
                  Push Up Counter
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
