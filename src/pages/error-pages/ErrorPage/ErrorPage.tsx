import styles from "./ErrorPage.module.scss";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "utils/routes";

interface ErrorPageProps {
	title?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ title }) => {
	return (
		<main className={`root_wrapper ${styles.error}`}>
			<h2 className={styles.title}>{title}</h2>
			<hr style={{ height: 1, width: "100px" }} />
			<Link to={ROUTES.OUR_TEAM}>Главная страница</Link>
			<hr style={{ height: 1, width: "100px" }} />
		</main>
	);
};

export default ErrorPage;
