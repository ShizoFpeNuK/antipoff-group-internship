import MainButton from "components/ui/buttons/MainButton/MainButton";
import styles from "./HeaderUser.module.scss";
import { IUser } from "models/our-team.model";
import { ROUTES } from "utils/routes";
import { IClient } from "models/client.model";
import { ourTeamApi } from "services/our-team.service";
import { useNavigate } from "react-router-dom";
import { clientLogout } from "store/actions/client.actions";
import { useAppDispatch } from "hooks/redux";
import { useResizeWidth } from "hooks/useResizeWidth";
import { ReactComponent as ExitIcon } from "assets/svg/exit.svg";
import { ReactComponent as BackIcon } from "assets/svg/arrow.svg";
import { ReactComponent as EditIcon } from "assets/svg/edit.svg";
import { ChangeEventHandler, FC, useRef } from "react";

interface HeaderUserProps {
	user: IUser;
	client: IClient | null;
}

const HeaderUser: FC<HeaderUserProps> = ({ user, client }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const windowWidth = useResizeWidth();
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
				<div className={styles.wrapperAvatar}>
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
					/>

					{client?.email === user.email && (
						<button
							className={styles.btnEdit}
							onClick={handleClickAvatar}
						>
							<EditIcon />
						</button>
					)}
				</div>

				<div className={styles.wrapperText}>
					<h1 className="root_h1">{`${user.first_name} ${user.last_name}`}</h1>
					<div className={styles.subtext}>Партнер</div>
				</div>
			</div>

			<div className={styles.buttons}>
				{windowWidth > 1024 ? (
					<>
						<MainButton
							className={styles.btn}
							onClick={handleClickBack}
						>
							Назад
						</MainButton>
						<MainButton
							className={styles.btn}
							onClick={() => dispatch(clientLogout())}
						>
							Выход
						</MainButton>
					</>
				) : (
					<>
						<button
							className={styles.smallBtn}
							onClick={handleClickBack}
						>
							<BackIcon />
						</button>
						<button
							className={styles.smallBtn}
							onClick={() => dispatch(clientLogout())}
						>
							<ExitIcon />
						</button>
					</>
				)}
			</div>
		</header>
	);
};

export default HeaderUser;
