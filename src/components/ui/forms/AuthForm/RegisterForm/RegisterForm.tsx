import styles from "./RegisterForm.module.scss";
import Input from "components/ui/forms/form-items/Input/Input";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import MainButton from "components/ui/buttons/MainButton/MainButton";
import InputPassword from "components/ui/forms/form-items/InputPassword/InputPassword";
import { ROUTES } from "utils/routes";
import { clientSlice } from "store/reducers/ClientSlice";
import { MESSAGE_ERROR } from "utils/rules/message-rules";
import { clientRegister } from "store/actions/client.actions";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ErrorsForm, ValuesForm } from "utils/types/form.type";
import { RULES_EMAIL, RULES_FULL_NAME, RULES_PASSWORD } from "utils/rules/form-rules";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";

type FormKeys = "email" | "password" | "name" | "confirm_password";

const defaultValues: ValuesForm<FormKeys> = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
};

const defaultErrors: ErrorsForm<FormKeys> = {
	name: { error: false, message: "" },
	email: { error: false, message: "" },
	password: { error: false, message: "" },
	confirm_password: { error: false, message: "" },
};

const RegisterForm: FC = () => {
	const [values, setValues] = useState<ValuesForm<FormKeys>>(defaultValues);
	const [errors, setErrors] = useState<ErrorsForm<FormKeys>>(defaultErrors);
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

		if (!values.name) {
			err.name.message = MESSAGE_ERROR.REQUIRED;
			err.name.error = true;
		} else if (!RULES_FULL_NAME.pattern.value.test(values.name)) {
			err.name.message = RULES_FULL_NAME.pattern.message;
			err.name.error = true;
		} else {
			err.name.error = false;
		}

		if (!values.email) {
			err.email.message = MESSAGE_ERROR.REQUIRED;
			err.email.error = true;
		} else if (!RULES_EMAIL.pattern.value.test(values.email)) {
			err.email.message = RULES_EMAIL.pattern.message;
			err.email.error = true;
		} else {
			err.email.error = false;
		}

		if (!values.password) {
			err.password.message = MESSAGE_ERROR.REQUIRED;
			err.password.error = true;
		} else if (RULES_PASSWORD.minLength.value > values.password.length) {
			err.password.message = RULES_PASSWORD.minLength.message;
			err.password.error = true;
		} else if (!RULES_PASSWORD.pattern.value.test(values.password)) {
			err.password.message = RULES_PASSWORD.pattern.message;
			err.password.error = true;
		} else {
			err.password.error = false;
		}

		if (!values.confirm_password) {
			err.confirm_password.message = MESSAGE_ERROR.REQUIRED;
			err.confirm_password.error = true;
		} else if (values.password !== values.confirm_password) {
			err.confirm_password.message = MESSAGE_ERROR.CONFIRM_PASSWORD;
			err.confirm_password.error = true;
		} else {
			err.confirm_password.error = false;
		}

		setErrors(err);
		const isNotError = Object.values(err).every((e) => !e.error);

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
					textError={errors.name.error ? errors.name.message : ""}
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
					textError={errors.email.error ? errors.email.message : ""}
				/>
				<InputPassword
					name="password"
					label="Пароль"
					required
					autoComplete="off"
					onChange={handleChange}
					placeholder="*******"
					textError={errors.password.error ? errors.password.message : ""}
				/>
				<InputPassword
					name="confirm_password"
					label="Подтвердите пароль"
					required
					autoComplete="off"
					placeholder="*******"
					onChange={handleChange}
					textError={errors.confirm_password.error ? errors.confirm_password.message : ""}
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
