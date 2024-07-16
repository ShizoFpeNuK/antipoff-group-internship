import styles from "./Input.module.scss";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	textError?: string;
}

const Input: FC<InputProps> = ({ label, className = "", textError, ...props }) => {
	return (
		<label className={styles.label}>
			{label && <span className={styles.title}>{label}</span>}
			<input
				{...props}
				className={`${styles.input} ${textError ? styles.error : ""}`}
			/>
			{textError && <span className={styles.textError}>{textError}</span>}
		</label>
	);
};

export default Input;
