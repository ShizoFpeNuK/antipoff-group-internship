import MainButton from "components/buttons/MainButton/MainButton";
import styles from "./HeaderOurTeam.module.scss";
import { FC } from "react";

const HeaderOurTeam: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapperText}>
				<h1 className="root_h1">Наша команда</h1>
				<h2 className="root_h2">
					Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
					плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
				</h2>
			</div>

			<MainButton className={styles.btnLogout}>Выход</MainButton>
		</header>
	);
};

export default HeaderOurTeam;
