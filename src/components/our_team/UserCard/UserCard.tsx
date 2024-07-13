import styles from "./UserCard.module.scss";
import { FC } from "react";
import { ReactComponent as HearthIcon } from "assets/svg/hearth.svg";

const UserCard: FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<img
					className={styles.avatar}
					src="/img/avatar.png"
					alt=""
				/>
				<span className={`${styles.name} root_h2`}>Артур Королёв</span>
			</div>

			<div className={styles.buttons}>
				<HearthIcon className={styles.hearth} />
			</div>
		</div>
	);
};

export default UserCard;
