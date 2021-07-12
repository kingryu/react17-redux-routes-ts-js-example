import React from 'react';
import styles from './Header.module.scss';

function Header(props, state) {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.center}>{props.title}</div>
    </div>
  );
}

export default Header;
