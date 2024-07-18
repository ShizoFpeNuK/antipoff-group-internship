import Input from "components/ui/forms/form-items/Input/Input";
import InputPassword from "components/ui/forms/form-items/InputPassword/InputPassword";
import styles from "./RegisterForm.module.scss";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";
import MainButton from "components/ui/buttons/MainButton/MainButton";
import { RULES_EMAIL, RULES_FULL_NAME, RULES_PASSWORD } from "utils/rules/form-rules";
import { MESSAGE_ERROR } from "utils/rules/message-rules";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { clientRegister } from "store/actions/ActionCreators";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import { clientSlice } from "store/reducers/ClientSlice";

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
	const [messages, setMessages] = useState<ValuesForm<string>>(defaultValues);
	const { client, isLoading, isError } = useAppSelector((state) => state.clientReducer);
	const { setIsError } = clientSlice.actions;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setValues((values) => ({ ...values, [target.name]: target.value }));
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const err = { ...errors };
		const mes = { ...messages };

		if (!values.name) {
			mes.name = MESSAGE_ERROR.REQUIRED;
			err.name = true;
		} else if (!RULES_FULL_NAME.pattern.value.test(values.name)) {
			mes.name = RULES_FULL_NAME.pattern.message;
			err.name = true;
		} else {
			err.name = false;
		}

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
		} else if (RULES_PASSWORD.minLength.value > values.password.length) {
			mes.password = RULES_PASSWORD.minLength.message;
			err.password = true;
		} else if (!RULES_PASSWORD.pattern.value.test(values.password)) {
			mes.password = RULES_PASSWORD.pattern.message;
			err.password = true;
		} else {
			err.password = false;
		}

		if (!values.confirm_password) {
			mes.confirm_password = MESSAGE_ERROR.REQUIRED;
			err.confirm_password = true;
		} else if (values.password !== values.confirm_password) {
			mes.confirm_password = MESSAGE_ERROR.CONFIRM_PASSWORD;
			err.confirm_password = true;
		} else {
			err.confirm_password = false;
		}

		setErrors(err);
		setMessages(mes);
		const isNotError = Object.values(err).every((e) => !e);

		if (isNotError) {
			dispatch(
				clientRegister({
					email: values.email,
					password: values.password,
				}),
			);
		} else {
			dispatch(setIsError(false));
		}
	};

	useEffect(() => {
		if (client) {
			navigate(ROUTES.OUR_TEAM);
		}
	}, [client, navigate]);

	return (
		<form
			className={styles.registerForm}
			onSubmit={handleSubmit}
			noValidate
			autoComplete="on"
		>
      {isLoading && (
				<div className={styles.overlay}>
					<MainLoader size={100} />
				</div>
			)}
      
			<div className={styles.wrapper}>
				<h2 className="root_h2">Регистрация</h2>
				<Input
					name="name"
					id="name"
					label="Имя"
					type="text"
					placeholder="Иван"
					required
					autoComplete="name"
					onChange={handleChange}
					textError={errors.name ? messages.name : ""}
				/>
				<Input
					name="email"
					id="email"
					label="Электронная почта"
					type="email"
					placeholder="example@mail.ru"
					autoComplete="email"
					required
					onChange={handleChange}
					textError={errors.email ? messages.email : ""}
				/>
				<InputPassword
					name="password"
					label="Пароль"
					required
					autoComplete="off"
					onChange={handleChange}
          placeholder="*******"
					textError={errors.password ? messages.password : ""}
				/>
				<InputPassword
					name="confirm_password"
					label="Подтвердите пароль"
					required
					autoComplete="off"
          placeholder="*******"
					onChange={handleChange}
					textError={errors.confirm_password ? messages.confirm_password : ""}
				/>
        {isError && <p className={styles.errorSubmit}>Не существует текущего пользователя </p>}
			</div>

			<div className={styles.buttons}>
				<Link
					className={styles.link}
					to={ROUTES.SING_IN}
          onClick={() => dispatch(setIsError(false))}
				>
					Уже есть аккаунт?
				</Link>
				<MainButton
					className={styles.btnSubmit}
					type="submit"
				>
					Зарегистрироваться
				</MainButton>
			</div>
		</form>
	);
};

export default RegisterForm;
