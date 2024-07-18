import styles from "./LoginForm.module.scss";
import Input from "components/ui/forms/form-items/Input/Input";
import MainButton from "components/ui/buttons/MainButton/MainButton";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import InputPassword from "components/ui/forms/form-items/InputPassword/InputPassword";
import { ROUTES } from "utils/routes";
import { RULES_EMAIL } from "utils/rules/form-rules";
import { clientSlice } from "store/reducers/ClientSlice";
import { clientLogin } from "store/actions/client.actions";
import { MESSAGE_ERROR } from "utils/rules/message-rules";
import { Link, useNavigate } from "react-router-dom";
import { ErrorsForm, ValuesForm } from "utils/types/form.type";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";

type FormKeys = "email" | "password";

const defaultValues: ValuesForm<FormKeys> = {
	email: "",
	password: "",
};

const defaultErrors: ErrorsForm<FormKeys> = {
	email: { error: false, message: "" },
	password: { error: false, message: "" },
};

const LoginForm: FC = () => {
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
		} else {
			err.password.error = false;
		}

		setErrors(err);
		const isNotError = Object.values(err).every((e) => !e.error);

		if (isNotError) {
			dispatch(
				clientLogin({
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
			className={styles.loginForm}
			onSubmit={handleSubmit}
			noValidate
			autoComplete="on"
			name="sing-up"
		>
			{isLoading && (
				<div className={styles.overlay}>
					<MainLoader size={100} />
				</div>
			)}

			<div className={styles.wrapper}>
				<h2 className="root_h2">Авторизация</h2>
				<Input
					type="email"
					name="email"
					id="email"
					label="Электронная почта"
					placeholder="example@mail.ru"
					required
					autoComplete="email"
					onChange={handleChange}
					textError={errors.email.error ? errors.email.message : ""}
				/>
				<InputPassword
					name="password"
					label="Пароль"
					required
					autoComplete="off"
					placeholder="*******"
					onChange={handleChange}
					textError={errors.password.error ? errors.password.message : ""}
				/>
				{isError && <p className={styles.errorSubmit}>Не существует текущего пользователя </p>}
			</div>

			<div className={styles.buttons}>
				<Link
					className={styles.link}
					to={ROUTES.SING_UP}
					onClick={() => dispatch(setIsError(false))}
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
