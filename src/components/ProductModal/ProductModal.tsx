/** @format */

import React from 'react';
import styles from './ProductModal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleUnbalanced, faHeart } from '@fortawesome/free-solid-svg-icons';

export type TproductData = {
	image: string;
	name: string;
	title: string;
	isFreeShipping: boolean;
	priceNew: number;
	priceOld?: number;
	currency: string;
	stock: number;
};

const ProductModal: React.FC<{
	productData: TproductData;
	addToCartFnc: (name: string) => void;
	compareFnc: (name: string) => void;
	saveFnc: (name: string) => void;
}> = (props) => {
	return (
		<>
			<div className={styles.globalContainer}>
				<div className={styles.cardContainer}>
					<div className={styles.imageContainer}>
						<img
							className={styles.image}
							src={props.productData.image}
							alt={props.productData.image}
						/>
					</div>
					<div className={styles.contentContainer}>
						<div className={styles.container}>
							<div>
								{props.productData.isFreeShipping ? (
									<div className={styles.label}>Free Shipping</div>
								) : null}
							</div>
							<div className={styles.title}>{props.productData.title}</div>
							<div className={styles.price}>
								{props.productData.priceOld ? (
									<p className={styles.priceOld}>
										{`${props.productData.currency}${props.productData.priceOld}`}
									</p>
								) : null}
								<p className={styles.priceNew}>
									{`${props.productData.currency}${props.productData.priceNew}`}
								</p>
								<p className={styles.priceWarning}>Limited stock</p>
							</div>
							<button
								className={styles.addToCartBtn}
								onClick={() => props.addToCartFnc(props.productData.name)}
							>
								Add to Cart
							</button>

							<div className={styles.stockContainer}>
								<div className={styles.stock} />
								{`${props.productData.stock} more in stock`}
							</div>

							<div className={styles.bottomBtnContainer}>
								<button
									className={styles.compareBtn}
									onClick={() => props.compareFnc(props.productData.name)}
								>
									<FontAwesomeIcon icon={faScaleUnbalanced} />
									<span>Compare</span>
								</button>
								<button
									className={styles.bookmarkBtn}
									onClick={() => props.saveFnc(props.productData.name)}
								>
									<FontAwesomeIcon icon={faHeart} />
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
