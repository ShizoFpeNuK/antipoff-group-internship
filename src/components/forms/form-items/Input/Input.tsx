import styles from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
	label: string;
}

const Input: FC<InputProps> = ({ label }) => {
	return (
		<label>
			{label}
			<input />
		</label>
	);
};

export default Input;
