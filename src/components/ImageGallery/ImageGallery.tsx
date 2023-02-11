/** @format */

import styles from './ImageGallery.module.css';

import React from 'react';

import image1 from '../../assets/images/image1.jpg';
import imageicon from '../../assets/images/bookmark.svg';

const ImageGallery: React.FC = (props) => {
	return (
		<>
			<div className={styles.globalContainer}>
				<div className={styles.cardContainer}>
					<div className={styles.menuContainer}>
						<div className={styles.menuItemGroup}>
							<div className={styles.menuItem}>
								{' '}
								<a
									className={styles.menuItemLink}
									href='#'
								>
									Vector
								</a>
							</div>
						</div>

						<div className={styles.menuItemGroup}>
							<div className={styles.menuItem}>
								{' '}
								<a
									className={styles.menuItemLink}
									href='#'
								>
									Ilustrations
								</a>
							</div>
						</div>

						<div className={styles.menuItemGroup}>
							<div className={styles.menuItem}>
								{' '}
								<a
									className={styles.menuItemLink}
									href='#'
								>
									Images
								</a>
							</div>
						</div>

						<div className={styles.menuItemGroup}>
							<div className={styles.menuItem}>
								{' '}
								<a
									className={styles.menuItemLink}
									href='#'
								>
									Icons
								</a>
							</div>
						</div>
					</div>

					<div className={styles.searchContainer}>
						<div className={styles.searchInputContainer}>
							<input
								className={styles.searchInput}
								type='text'
								placeholder='Search'
							/>

							<button className={styles.searchBtn}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={styles.searchSVG}
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path
										stroke='none'
										d='M0 0h24v24H0z'
										fill='none'
									/>
									<circle
										cx='10'
										cy='10'
										r='7'
									/>
									<line
										x1='21'
										y1='21'
										x2='15'
										y2='15'
									/>
								</svg>
							</button>
						</div>

						<button className={styles.uploadButton}>Upload</button>
					</div>

					<div className={styles.galleryContainer}>
						<div className={styles.imageContainer}>
							<img
								src={image1}
								alt={image1}
								className={styles.image}
							/>
							<div className={styles.imageInfoContainer}>
								<div className={styles.imageInfogroup}>
									<div className={styles.imageInfo}>
										<p className={styles.imageInfoTitle}>Abstract painting</p>
										<p className={styles.imageInfoLikes}>
											234 likes - 23 shares
										</p>
									</div>
									<div className={styles.imageInfoIcon}>
										<img
											src={imageicon}
											alt={imageicon}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.imageContainer}>
							<img
								src={image1}
								alt={image1}
								className={styles.image}
							/>
							<div className={styles.imageInfoContainer}>
								<div className={styles.imageInfogroup}>
									<div className={styles.imageInfo}>
										<p className={styles.imageInfoTitle}>Abstract painting</p>
										<p className={styles.imageInfoLikes}>
											234 likes - 23 shares
										</p>
									</div>
									<div className={styles.imageInfoIcon}>
										<img
											src={imageicon}
											alt={imageicon}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.imageContainer}>
							<img
								src={image1}
								alt={image1}
								className={styles.image}
							/>
							<div className={styles.imageInfoContainer}>
								<div className={styles.imageInfogroup}>
									<div className={styles.imageInfo}>
										<p className={styles.imageInfoTitle}>Abstract painting</p>
										<p className={styles.imageInfoLikes}>
											234 likes - 23 shares
										</p>
									</div>
									<div className={styles.imageInfoIcon}>
										<img
											src={imageicon}
											alt={imageicon}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.imageContainer}>
							<img
								src={image1}
								alt={image1}
								className={styles.image}
							/>
							<div className={styles.imageInfoContainer}>
								<div className={styles.imageInfogroup}>
									<div className={styles.imageInfo}>
										<p className={styles.imageInfoTitle}>Abstract painting</p>
										<p className={styles.imageInfoLikes}>
											234 likes - 23 shares
										</p>
									</div>
									<div className={styles.imageInfoIcon}>
										<img
											src={imageicon}
											alt={imageicon}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.imageContainer}>
							<img
								src={image1}
								alt={image1}
								className={styles.image}
							/>
							<div className={styles.imageInfoContainer}>
								<div className={styles.imageInfogroup}>
									<div className={styles.imageInfo}>
										<p className={styles.imageInfoTitle}>Abstract painting</p>
										<p className={styles.imageInfoLikes}>
											234 likes - 23 shares
										</p>
									</div>
									<div className={styles.imageInfoIcon}>
										<img
											src={imageicon}
											alt={imageicon}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageGallery;
