import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>vx Blog</h1>
                <div className={styles.navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
