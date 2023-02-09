/** @format */

import { useState } from 'react';
import styles from './Select.module.css';

export type TselectOption = {
	label: string;
	value: string | number;
};

const Select: React.FC<{
	value?: TselectOption;
	onChange: (value: TselectOption | undefined) => void;
	options: TselectOption[];
	multi?: boolean;
}> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const clearoptions = () => {
		props.onChange(undefined);
	};

	const selectOption = (option: TselectOption) => {
		if (option !== props.value) props.onChange(option);
	};

	return (
		<>
			<div
				onBlur={() => setIsOpen(false)}
				onClick={(e) => setIsOpen((prev) => !prev)}
				tabIndex={0}
				className={styles.parent}
			>
				<span className={styles.value}>{props.value?.label}</span>
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
					{props.options.map((option: TselectOption) => (
						<li
							onClick={(e) => {
								e.stopPropagation();
								selectOption(option);
								setIsOpen(false);
							}}
							className={`${styles.option} ${
								option === props.value ? styles.selected : ''
							}`}
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

export default Select;
