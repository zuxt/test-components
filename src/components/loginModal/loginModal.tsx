/** @format */

import styles from './loginModal.module.css';
import image from '../../assets/images/image_login.jpg';
import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

const Loginmodal: React.FC = (props) => {
	return (
		<>
			<div className={styles.globalContainer}>
				<div className={styles.cardContainer}>
					<div className={styles.leftSide}>
						<h2 className={styles.topContentTitle}>Log in</h2>
						<p className={styles.topContentText}>
							Log in to your account to do stuff and what ever
						</p>
						<input
							type='text'
							className={styles.input}
							placeholder='Enter your email address'
						/>
						<div className={styles.middleContent}>
							<div className={styles.forgotPassword}>Forgot password</div>

							<button className={styles.button}>
								<span>Next</span>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>

						<div className={styles.border}></div>

						<p className={styles.bottomContent}>Or log in with</p>

						<div className={styles.bottomButtons}>
							<button className={styles.socialBtn}>
								<img
									className={styles.socialImg}
									src={facebookImg}
									alt='facbook'
								/>
								<span>Facebook</span>
							</button>
							<button className={styles.socialBtn}>
								<img
									className={styles.socialImg}
									src={googleImg}
									alt='google'
								/>
								<span>Google</span>
							</button>
						</div>
					</div>

					<img
						src={image}
						className={styles.rightSide}
					/>

					<div className={styles.colseBtn}>
						<FontAwesomeIcon icon={faXmarkCircle} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Loginmodal;
