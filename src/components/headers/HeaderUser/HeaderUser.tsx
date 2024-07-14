import MainButton from "components/buttons/MainButton/MainButton";
import styles from "./HeaderUser.module.scss";
import { FC } from "react";
import { useAppDispatch } from "hooks/redux";
import { clientLogout } from "store/reducers/ActionCreators";

const HeaderUser: FC = () => {
	const dispatch = useAppDispatch();

	const handleClickBack = () => {
		console.log(1111);
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
					onClick={() => dispatch(clientLogout())}
				>
					Выход
				</MainButton>
			</div>
		</header>
	);
};

export default HeaderUser;
