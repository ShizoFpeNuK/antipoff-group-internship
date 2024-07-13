import HeaderOurTeam from "components/headers/HeaderOurTeam/HeaderOurTeam";
import UserList from "components/our_team/UserList/UserList";
import { FC } from "react";

const OurTeamPage: FC = () => {
	return (
		<main
			className="rootWrapper"
			style={{ paddingBottom: 56 }}
		>
			<HeaderOurTeam />
			<UserList />
		</main>
	);
};

export default OurTeamPage;
