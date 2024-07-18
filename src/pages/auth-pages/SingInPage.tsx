import styles from "./AuthPage.module.scss";
import LoginForm from "components/ui/forms/AuthForm/LoginForm/LoginForm";
import { FC } from "react";

const SingInPage: FC = () => {
	return (
		<main className="root_wrapper root_center">
			<section className={styles.container}>
				<LoginForm />
			</section>
		</main>
	);
};

export default SingInPage;
