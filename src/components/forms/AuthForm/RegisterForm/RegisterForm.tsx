import Input from "components/forms/form-items/Input/Input";
import InputPassword from "components/forms/form-items/InputPassword/InputPassword";
import styles from "./RegisterForm.module.scss";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import MainButton from "components/buttons/MainButton/MainButton";

interface ValuesForm<T> {
	name: T;
	email: T;
	password: T;
	confirm_password: T;
}

const defaultValues: ValuesForm<string> = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
};

const defaultErrors: ValuesForm<boolean> = {
	name: false,
	email: false,
	password: false,
	confirm_password: false,
};

const RegisterForm: FC = () => {
	const [values, setValues] = useState<ValuesForm<string>>(defaultValues);
	const [errors, setErrors] = useState<ValuesForm<boolean>>(defaultErrors);

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setValues((values) => ({ ...values, [target.name]: target.value }));
		setErrors((err) => ({ ...err, [target.name]: target.value.trim() ? false : true }));
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		let key: keyof ValuesForm<string>;
		const err = { ...errors };
		const val = { ...values };

		for (key in values) {
			const v = values[key].trim();
			val[key] = v;
			err[key] = !v ? true : false;
		}

		setErrors(err);
		console.log(val);
	};

	return (
		<form
			className={styles.registerForm}
			onSubmit={handleSubmit}
			noValidate
		>
			<div className={styles.wrapper}>
				<h2 className="root_h2">Регистрация</h2>
				<Input
					name="name"
					label="Имя"
					placeholder="Иван"
					className={styles.error}
					required
					onChange={handleChange}
					isError={errors.name}
				/>
				<Input
					name="email"
					label="Электронная почта"
					placeholder="example@mail.ru"
					required
					onChange={handleChange}
					isError={errors.email}
				/>
				<InputPassword
					name="password"
					label="Пароль"
					required
					onChange={handleChange}
					isError={errors.password}
				/>
				<InputPassword
					name="confirm_password"
					label="Подтвердите пароль"
					required
					onChange={handleChange}
					isError={errors.confirm_password}
				/>
			</div>

			<MainButton
				className={styles.btnSubmit}
				type="submit"
			>
				Зарегистрироваться
			</MainButton>
		</form>
	);
};

export default RegisterForm;
