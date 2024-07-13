import styles from "./InputPassword.module.scss";
import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ReactComponent as EyeOffIcon } from "assets/svg/eye-off.svg";
import { ReactComponent as EyeOnIcon } from "assets/svg/eye-on.svg";

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	isError?: boolean;
}

const InputPassword: FC<InputPasswordProps> = ({ label, className = "", isError, ...props }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (isOpen) {
			inputRef.current!.type = "text";
		} else {
			inputRef.current!.type = "password";
		}
	}, [isOpen]);

	return (
		<label className={styles.label}>
			{label && <span>{label}</span>}
			<div className={`${styles.wrapper} ${isError && styles.error}`}>
				<input
					{...props}
					ref={inputRef}
					className={styles.input}
					type="password"
				/>
				<span onClick={() => setIsOpen(!isOpen)}>{isOpen ? <EyeOnIcon /> : <EyeOffIcon />}</span>
			</div>
      {isError && <span className={styles.textError}>Ошибка</span>}
		</label>
	);
};

export default InputPassword;
