import React from "react";
import styles from './ProductModal.module.css';

import image from '../../assets/images/headphone.png';
import weight from '../../assets/images/weight.png';
import heart from '../../assets/images/heart.png';

const ProductModal:React.FC = (props)=>{
    return (
    <>
    <div className={styles.globalContainer}>
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={image} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.label}>
                            Free Shipping
                        </div>
                    </div>
                    <div className={styles.title}>
                        Ultra COOL gaming Headset
                    </div>
                    <div className={styles.price}>
                        <p  className={styles.priceOld}>$890</p>
                        <p  className={styles.priceNew}>$599</p>
                        <p className={styles.priceWarning}>Limited stock</p>
                    </div>
                    <button className={styles.addToCartBtn}>
                        Add to Cart
                    </button>

                    <div className={styles.stockContainer}>
                        <div className={styles.stock}></div>
                        50 more in stock
                    </div>

                    <div className={styles.bottomBtnContainer}>
                        <button className={styles.compareBtn}>
                            <img className={styles.btnImg} src={weight} alt={weight} />
                            <span>Compare</span>
                        </button>
                        <button className={styles.bookmarkBtn}>
                            <img className={styles.btnImg} src={heart} alt={heart} />
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};
export default ProductModal;