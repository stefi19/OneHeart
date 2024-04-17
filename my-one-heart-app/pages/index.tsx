// TypeScript React component for the opening page

import React from 'react';
import styles from './index.module.css'; // Import the CSS module

const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                {/* Update the src path to the location of your logo file */}
                <img src="/logo.png" alt="OneHeart Logo" className={styles.logoImage} />
            </div>
            <p className={styles.tagline}>bringing us closer with every beat</p>
            <div className={styles.login}>
                <button className={styles.loginButton}>login</button>
                <p className={styles.signupPrompt}>
                    don't have an account? <a href="/signup" className={styles.signupLink}>sign up</a>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
