import styles from "./HeaderOurTeam.module.scss";
import MainButton from "components/ui/buttons/MainButton/MainButton";
import { FC } from "react";
import { clientLogout } from "store/actions/client.actions";
import { useAppDispatch } from "hooks/redux";
import { useResizeWidth } from "hooks/useResizeWidth";
import { ReactComponent as ExitIcon } from "assets/svg/exit.svg";

const HeaderOurTeam: FC = () => {
	const dispatch = useAppDispatch();
	const windowWidth = useResizeWidth();

	return (
		<header className={styles.header}>
			<div className={styles.wrapperText}>
				<h1 className="root_h1">Наша команда</h1>
				<h2 className="root_h2">
					Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
					плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
				</h2>
			</div>

			{windowWidth > 1024 ? (
				<MainButton
					className={styles.btnLogout}
					onClick={() => dispatch(clientLogout())}
				>
					Выход
				</MainButton>
			) : (
				<button
					className={styles.smallBtnLogout}
					onClick={() => dispatch(clientLogout())}
				>
					<ExitIcon />
				</button>
			)}
		</header>
	);
};

export default HeaderOurTeam;
