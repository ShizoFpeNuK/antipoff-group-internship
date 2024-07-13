import styles from "./MainButton.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const MainButton: FC<MainButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={`${className} ${styles.btn}`}
		>
			{children}
		</button>
	);
};

export default MainButton;
