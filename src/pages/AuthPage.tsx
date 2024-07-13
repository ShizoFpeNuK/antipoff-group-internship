import RegisterForm from "components/forms/AuthForm/RegisterForm/RegisterForm";
import { FC } from "react";

const AuthPage: FC = () => {
	return (
		<main className="root_wrapper root_center">
			<RegisterForm />
		</main>
	);
};

export default AuthPage;
