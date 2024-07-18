import styles from "./AuthPage.module.scss";
import RegisterForm from "components/ui/forms/AuthForm/RegisterForm/RegisterForm";
import { FC } from "react";

const SingUpPage: FC = () => {
	return (
		<main className="root_wrapper root_center">
			<section className={styles.container}>
				<RegisterForm />
			</section>
		</main>
	);
};

export default SingUpPage;
