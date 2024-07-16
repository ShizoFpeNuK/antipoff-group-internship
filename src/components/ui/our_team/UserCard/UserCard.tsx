import styles from "./UserCard.module.scss";
import { FC } from "react";
import { ReactComponent as HearthIcon } from "assets/svg/hearth.svg";
import { IUser } from "models/our-team.model";

interface UserCardProps {
	user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
	return (
		<div
			className={styles.card}
			data-id={user.id}
		>
			<div className={styles.wrapper}>
				<img
					className={styles.avatar}
					src={user.avatar}
					alt={`${user.first_name} ${user.last_name}`}
				/>
				<span className={`${styles.name} root_h2`}>
					{user.first_name}&nbsp;{user.last_name}
				</span>
			</div>

			<div className={styles.buttons}>
				<button className={styles.btnLike} data-btn-like>
					<HearthIcon />
				</button>
			</div>
		</div>
	);
};

export default UserCard;
