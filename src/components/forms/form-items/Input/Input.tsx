import styles from "./Input.module.scss";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	isError?: boolean;
}

const Input: FC<InputProps> = ({ label, className = "", isError, ...props }) => {
	return (
		<label className={styles.label}>
			{label && <span className={styles.title}>{label}</span>}
			<input
				{...props}
				className={`${styles.input} ${isError && styles.error}`}
			/>
			{isError && <span className={styles.textError}>Ошибка</span>}
		</label>
	);
};

export default Input;
