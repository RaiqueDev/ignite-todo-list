import { Rocket } from 'phosphor-react';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Rocket size={32} color="springgreen" weight="duotone" />

        <strong>
          to <span>do</span>
        </strong>
      </div>
    </>
  );
}