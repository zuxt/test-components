import { useState } from 'react';
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

  const clearoptions = () => {
    props.onChange([]);
  };

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
          {props.options.map((option: TselectOption) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              className={`${styles.option} ${
                props.value.includes(option) ? styles.selected : ''
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

export default MultiSelect;
