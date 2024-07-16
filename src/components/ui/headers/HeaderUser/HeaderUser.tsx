import MainButton from "components/ui/buttons/MainButton/MainButton";
import styles from "./HeaderUser.module.scss";
import { FC } from "react";
import { useAppDispatch } from "hooks/redux";
import { clientLogout } from "store/reducers/ActionCreators";
import { IUser } from "models/our-team.model";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";

interface HeaderUserProps {
	user: IUser;
}

const HeaderUser: FC<HeaderUserProps> = ({ user }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClickBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate(ROUTES.OUR_TEAM);
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<img
					className={styles.avatar}
					src={user.avatar || "/img/avatar.png"}
					alt={`${user.first_name} ${user.last_name}` || "Пользователь"}
				/>

				<div className={styles.wrapperText}>
					<h1 className="root_h1">{`${user.first_name} ${user.last_name}`}</h1>
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
