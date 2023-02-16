/** @format */

import styles from './ImageGallery.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export type Timages = {
	name: string;
	type: 'vector' | 'ilustration' | 'image' | 'icon';
	title: string;
	image: string;
	likes: number;
	dislikes: number;
	isBookmarked: boolean;
};

const ImageGallery: React.FC<{
	images: Timages[];
	uploadCallbackFnc: (path: string) => void;
}> = (props) => {
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
						{props.images.map((image) => {
							return (
								<div
									key={image.name}
									className={styles.imageContainer}
								>
									<img
										src={image.image}
										alt={image.image}
										className={styles.image}
									/>
									<div className={styles.imageInfoContainer}>
										<div className={styles.imageInfogroup}>
											<div className={styles.imageInfo}>
												<p className={styles.imageInfoTitle}>{image.title}</p>
												<p className={styles.imageInfoLikes}>
													{`${image.likes} likes - ${image.dislikes} dislikes`}
												</p>
											</div>
											<div className={styles.imageInfoIcon}>
												<FontAwesomeIcon
													icon={faBookmark}
													className={
														image.isBookmarked ? styles.imageBookmarked : ''
													}
												/>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageGallery;
