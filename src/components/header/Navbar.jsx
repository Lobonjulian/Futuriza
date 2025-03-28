import List from "../Common/List";

import styles from "./styles.module.css";

const NavEnlaces = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Vision General", href: "/vision" },
  { id: 3, name: "Blog", href: "/blog" },
  { id: 4, name: "Contact", href: "/contact" },
  { id: 5, name: "Ayuda", href: "/help" },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <List items={NavEnlaces} />
    </nav>
  );
};

export default Navbar;
