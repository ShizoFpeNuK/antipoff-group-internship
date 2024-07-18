import styles from "./ErrorNotFound.module.scss";
import { FC } from "react";

const ErrorNotFound: FC = () => {
	return (
		<div className={styles.error}>
			<h2 className="root_h2">Ничего не найдено</h2>
			<p>Попробуйте изменить параметры запроса</p>
		</div>
	);
};

export default ErrorNotFound;
