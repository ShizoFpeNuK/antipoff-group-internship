import styles from "./RegisterForm.module.scss";
import { FC } from "react";

const RegisterForm: FC = () => {
	return (
		<form className={styles.registerForm}>
			<div className={styles.wrapper}>
				<h2 className="h2">Регистрация</h2>
			</div>
			<button>Зарегистрироваться</button>
		</form>
	);
};

export default RegisterForm;
