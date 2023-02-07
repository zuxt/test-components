import React from 'react';
import styles from './EmailSubscribe.module.css';

import image from '../../assets/images/image.jpg';

const EmailSubscribe: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <img className={styles.image} src={image} alt='' />
          <div className={styles.contentContainer}>
            <h2 className={styles.contentTitle}>
              Lots of cool stuff in you inbox... i promise :)
            </h2>
            <p className={styles.content}>
              You breath in, you breath out, eat, shit, sleep, you take whatever
              they give you, and you give nothing in return.
            </p>

            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type='text'
                placeholder='Enter your email address'
              />

              <button className={styles.btn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
