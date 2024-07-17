import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";
import { FC, MouseEventHandler, useEffect, useRef } from "react";
import { IUser } from "models/our-team.model";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/routes";
import { usersLikeSlice } from "store/reducers/UsersLikeSlice";
import { useAppDispatch, useAppSelector } from "hooks/redux";

interface UserListProps {
	users: IUser[];
	onClickMore?: () => void;
}

const UserList: FC<UserListProps> = ({ users }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const listRef = useRef<HTMLDivElement | null>(null);
	const { usersLikeId } = useAppSelector((state) => state.usersLikeReducer);
	const { addUserLikeId, removeUserLikeId } = usersLikeSlice.actions;

	const handleClick: MouseEventHandler<HTMLElement> = ({ target }) => {
		let el = target as HTMLElement;

		if (!el.classList.contains(styles.list)) {
			if (
				el.tagName.toLowerCase() === "button" ||
				el.tagName.toLowerCase() === "svg" ||
				el.tagName.toLowerCase() === "path"
			) {
				while (el.tagName.toLowerCase() !== "button" && el.tagName.toLowerCase() !== "body") {
					el = el.parentElement!;
				}

				if (el.hasAttribute("data-btn-like")) {
					while (!el.hasAttribute("data-id")) {
						el = el.parentElement!;
					}

					if (el.hasAttribute("data-liked")) {
						el.removeAttribute("data-liked");
						dispatch(removeUserLikeId(Number(el.getAttribute("data-id"))));
					} else {
						el.setAttribute("data-liked", "");
						dispatch(addUserLikeId(Number(el.getAttribute("data-id"))));
					}
				}

				return;
			}

			while (!el.hasAttribute("data-id")) {
				el = el.parentElement!;
			}

			navigate(`${ROUTES.OUR_TEAM}/${el.getAttribute("data-id")}`);
		}
	};

	useEffect(() => {
		if (listRef.current && users.length) {
			Array.from(listRef.current.children).forEach((child) => {
				const id = child.getAttribute("data-id");

				usersLikeId.forEach((userLikeId) => {
					if (userLikeId === Number(id)) {
						child.setAttribute("data-liked", "");
					}
				});
			});
		}
	}, [users, usersLikeId]);

	return (
		<div
			className={styles.list}
			onClick={handleClick}
			ref={listRef}
		>
			{users.map((user) => (
				<UserCard
					user={user}
					key={user.id}
				/>
			))}
		</div>
	);
};

export default UserList;
