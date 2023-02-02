import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">Posts</Link>
      </h1>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/new-post"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            New Post
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
