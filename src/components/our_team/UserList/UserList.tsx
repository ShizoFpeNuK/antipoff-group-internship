import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";
import { FC } from "react";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow.svg";

const UserList: FC = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.list}>
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</div>

			<button className={styles.btnMore}>
				<span>Показать еще</span>
				<ArrowIcon />
			</button>
		</section>
	);
};

export default UserList;
