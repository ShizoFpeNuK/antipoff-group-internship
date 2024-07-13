import MainButton from "components/buttons/MainButton/MainButton";
import styles from "./HeaderUser.module.scss";
import { FC } from "react";

const HeaderUser: FC = () => {
	const handleClickBack = () => {
		console.log(1111);
	};

	const handleClickLogout = () => {
		console.log(2222);
	};

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<img
					className={styles.avatar}
					src="/img/avatar.png"
					alt=""
				/>

				<div className={styles.wrapperText}>
					<h1 className="root_h1">Артур Королёв</h1>
					<div className={styles.subtext}>Партнер</div>
				</div>
			</div>

			<div className={styles.buttons}>
				<MainButton
					className={styles.btnBack}
					onClick={handleClickBack}
				>
					Назад
				</MainButton>
				<MainButton
					className={styles.btnLogout}
					onClick={handleClickLogout}
				>
					Выход
				</MainButton>
			</div>
		</header>
	);
};

export default HeaderUser;
