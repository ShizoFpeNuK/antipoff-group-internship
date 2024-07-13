import HeaderUser from "components/headers/HeaderUser/HeaderUser";
import UserInfo from "components/user/UserInfo/UserInfo";
import { FC } from "react";

const UserPage: FC = () => {
	return (
		<main
			className="rootWrapper"
			style={{ paddingBottom: 56 }}
		>
			<HeaderUser />
			<UserInfo />
		</main>
	);
};

export default UserPage;
