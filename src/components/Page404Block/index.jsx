import React from 'react';

import styles from './Page404Block.module.scss';

const Page404Block = () => {
  return (
    <div className={styles.root}>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <br />
      <p>К сожалению, данная страница отстутсвует в нашем интернет-магазине.</p>
      <p className={styles.description}>Пиздуй отсюдова</p>
    </div>
  );
};

export default Page404Block;
