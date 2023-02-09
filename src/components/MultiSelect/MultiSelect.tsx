/** @format */

import { useEffect, useRef, useState } from 'react';
import styles from './MultiSelect.module.css';

export type TselectOption = {
	label: string;
	value: string | number;
};

const MultiSelect: React.FC<{
	value: TselectOption[];
	onChange: (value: TselectOption[]) => void;
	options: TselectOption[];
}> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const clearoptions = () => {
		props.onChange([]);
	};

	useEffect(() => {
		if (isOpen) setHighlightedIndex(0);
	}, [isOpen]);

	useEffect(() => {
		const eventsHandler = (e: KeyboardEvent) => {
			if (e.target !== containerRef.current) {
				return;
			}

			switch (e.code) {
				case 'Enter':
				case 'Space':
					setIsOpen((prev) => !prev);
					if (isOpen) selectOption(props.options[highlightedIndex]);
					break;
				case 'ArrowUp':
					const newHIup = highlightedIndex - 1;
					if (newHIup >= 0) setHighlightedIndex(newHIup);
					break;
				case 'ArrowDown':
					if (!isOpen) {
						setIsOpen(true);
					}

					const newHIdw = highlightedIndex + 1;

					if (newHIdw < props.options.length) setHighlightedIndex(newHIdw);

					break;
				case 'Escape':
					setIsOpen(false);
					break;
				default:
					break;
			}
		};

		containerRef.current?.addEventListener('keydown', eventsHandler);

		return () => {
			containerRef.current?.removeEventListener('keydown', eventsHandler);
		};
	}, [isOpen, highlightedIndex, props.options]);

	const selectOption = (option: TselectOption) => {
		if (props.value.includes(option)) {
			props.onChange(props.value.filter((o) => o !== option));
		} else {
			props.onChange([...props.value, option]);
		}
	};

	return (
		<>
			<div
				ref={containerRef}
				onBlur={() => setIsOpen(false)}
				onClick={(e) => setIsOpen((prev) => !prev)}
				tabIndex={0}
				className={styles.parent}
			>
				<span className={styles.value}>
					{props.value.map((item) => {
						return (
							<button
								className={styles.optionBage}
								key={item.value}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(item);
								}}
							>
								{item.label}
								<span className={styles.removeBtn}>&times;</span>
							</button>
						);
					})}
				</span>

				<button
					onClick={(e) => {
						e.stopPropagation();
						clearoptions();
					}}
					className={styles.clrBtn}
				>
					&times;
				</button>
				<div className={styles.divider}></div>
				<div className={styles.caret}></div>
				<ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
					{props.options.map((option: TselectOption, index) => (
						<li
							onClick={(e) => {
								e.stopPropagation();
								selectOption(option);
								setIsOpen(false);
							}}
							className={`${styles.option} ${
								props.value.includes(option) ? styles.selected : ''
							}
              ${highlightedIndex === index ? styles.highlighted : ''}`}
							key={option.value}
							value={option.value}
						>
							{option.label}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default MultiSelect;
function usaRef() {
	throw new Error('Function not implemented.');
}
