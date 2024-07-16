import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";
import { FC, MouseEventHandler } from "react";
import { IUser } from "models/our-team.model";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";

interface UserListProps {
	users: IUser[];
	onClickMore?: () => void;
}

const UserList: FC<UserListProps> = ({ users }) => {
	const navigate = useNavigate();

	const handleClick: MouseEventHandler<HTMLElement> = ({ target }) => {
		let el = target as HTMLElement;

		if (el.tagName.toLowerCase() !== "section") {
			while (!el.hasAttribute("data-id")) {
				el = el.parentElement!;
			}

			navigate(`${ROUTES.OUR_TEAM}/${el.getAttribute("data-id")}`);
		}
	};

	return (
		<section
			className={styles.list}
			onClick={handleClick}
		>
			{users.map((user) => (
				<UserCard
					user={user}
					key={user.id}
				/>
			))}
		</section>
	);
};

export default UserList;
