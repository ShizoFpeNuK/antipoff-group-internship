import RegisterForm from "components/forms/AuthForm/RegisterForm/RegisterForm";
import { FC } from "react";

const AuthPage: FC = () => {
	return (
		<main className="rootWrapper center">
			<RegisterForm />
		</main>
	);
};

export default AuthPage;
