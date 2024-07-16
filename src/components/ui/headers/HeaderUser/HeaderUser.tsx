import MainButton from "components/ui/buttons/MainButton/MainButton";
import styles from "./HeaderUser.module.scss";
import { ChangeEventHandler, FC, useRef, useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { clientLogout } from "store/actions/ActionCreators";
import { IUser } from "models/our-team.model";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";
import { ourTeamApi } from "services/our-team.service";

interface HeaderUserProps {
	user: IUser;
}

const HeaderUser: FC<HeaderUserProps> = ({ user }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleClickAvatar = () => {
		inputRef.current?.click();
	};

	const handleChangeAvatar: ChangeEventHandler<HTMLInputElement> = ({ target: { files } }) => {
		if (files?.length) {
			dispatch(ourTeamApi.endpoints.updateAvatarById.initiate(user.id));
		}
	};

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
				<input
					ref={inputRef}
					className={styles.inputFile}
					type="file"
					accept=".jpg,.png,.jpeg,.webp,.avif"
					onChange={handleChangeAvatar}
					autoComplete="off"
					value=""
				/>
				<img
					className={styles.avatar}
					src={user.avatar || "/img/avatar.png"}
					alt={`${user.first_name} ${user.last_name}` || "Пользователь"}
					onClick={handleClickAvatar}
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
