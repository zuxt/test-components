/** @format */

import React, { useRef, useState } from 'react';
import styles from './EmailSubscribe.module.css';

import image from '../../assets/images/image_email.jpg';

const EmailSubscribe: React.FC<{
	callbackFn: (email: string) => void;
}> = (props) => {
	const emailAddressInput = useRef<HTMLInputElement>(null);
	const [isEmailOK, setEmailOK] = useState<boolean>(true);

	const checkEmail = (email: string): void => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailOK(true);
			props.callbackFn(email);
		} else {
			setEmailOK(false);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.cardContainer}>
					<img
						className={styles.image}
						src={image}
						alt=''
					/>
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
								ref={emailAddressInput}
								className={`${styles.input} ${
									!isEmailOK ? styles.inputBAD : ''
								}`}
								type='text'
								placeholder='Enter your email address'
							/>

							<button
								onClick={() => {
									checkEmail(
										emailAddressInput.current
											? emailAddressInput.current.value
											: ''
									);
								}}
								className={styles.btn}
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailSubscribe;
