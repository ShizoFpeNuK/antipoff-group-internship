import styles from "./MainButton.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const MainButton: FC<MainButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={`root_text ${styles.btn} ${className}`}
		>
			{children}
		</button>
	);
};

export default MainButton;
