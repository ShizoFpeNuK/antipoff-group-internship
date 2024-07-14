import HeaderOurTeam from "components/headers/HeaderOurTeam/HeaderOurTeam";
import UserList from "components/our_team/UserList/UserList";
import { FC, useEffect } from "react";
import { ourTeamApi } from "services/our-team.service";

const OurTeamPage: FC = () => {
	const { data: team } = ourTeamApi.useGetAllOurTeamQuery();

	useEffect(() => {
		console.log(team);
	}, [team]);

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
