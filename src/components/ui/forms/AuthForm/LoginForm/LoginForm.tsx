import MainButton from "components/ui/buttons/MainButton/MainButton";
import styles from "./LoginForm.module.scss";
import Input from "components/ui/forms/form-items/Input/Input";
import InputPassword from "components/ui/forms/form-items/InputPassword/InputPassword";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";
import { RULES_EMAIL } from "utils/rules/form-rules";
import { MESSAGE_ERROR } from "utils/rules/message-rules";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { clientLogin } from "store/reducers/ActionCreators";

interface ValuesForm<T> {
	email: T;
	password: T;
}

const defaultValues: ValuesForm<string> = {
	email: "",
	password: "",
};

const defaultErrors: ValuesForm<boolean> = {
	email: false,
	password: false,
};

const LoginForm: FC = () => {
	const [values, setValues] = useState<ValuesForm<string>>(defaultValues);
	const [errors, setErrors] = useState<ValuesForm<boolean>>(defaultErrors);
	const [messages, setMessages] = useState<ValuesForm<string>>(defaultValues);
	const navigate = useNavigate();
	const { isAuth } = useAppSelector((state) => state.clientReducer);
	const dispatch = useAppDispatch();

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setValues((values) => ({ ...values, [target.name]: target.value }));
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const err = { ...errors };
		const mes = { ...messages };

		if (!values.email) {
			mes.email = MESSAGE_ERROR.REQUIRED;
			err.email = true;
		} else if (!RULES_EMAIL.pattern.value.test(values.email)) {
			mes.email = RULES_EMAIL.pattern.message;
			err.email = true;
		} else {
			err.email = false;
		}

		if (!values.password) {
			mes.password = MESSAGE_ERROR.REQUIRED;
			err.password = true;
		} else {
			err.password = false;
		}

		setErrors(err);
		setMessages(mes);
		const isNotError = Object.values(err).every((e) => !e);

		if (isNotError) {
			dispatch(
				clientLogin({
					email: values.email,
					password: values.password,
				}),
			);
		}
	};

	useEffect(() => {
		if (isAuth) {
			navigate(ROUTES.OUR_TEAM);
		}
	}, [isAuth, navigate]);

	return (
		<form
			className={styles.loginForm}
			onSubmit={handleSubmit}
			noValidate
		>
			<div className={styles.wrapper}>
				<h2 className="root_h2">Авторизация</h2>
				<Input
					name="email"
					label="Электронная почта"
					type="email"
					placeholder="example@mail.ru"
					required
					onChange={handleChange}
					textError={errors.email ? messages.email : ""}
				/>
				<InputPassword
					name="password"
					label="Пароль"
					required
					onChange={handleChange}
					textError={errors.password ? messages.password : ""}
				/>
			</div>

			<div className={styles.buttons}>
				<Link
					className={styles.link}
					to={ROUTES.SING_UP}
				>
					Создать аккаунт
				</Link>
				<MainButton
					className={styles.btnSubmit}
					type="submit"
				>
					Войти
				</MainButton>
			</div>
		</form>
	);
};

export default LoginForm;
