import HeaderOurTeam from "components/ui/headers/HeaderOurTeam/HeaderOurTeam";
import UserListWithPagination from "components/ui/our_team/UserListWithPagination/UserListWithPagination";
import { COUNT_PER_PAGE } from "index";
import { IOurTeam } from "models/our-team.model";
import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const OurTeamPage: FC = () => {
	const { user } = useLoaderData() as { user: IOurTeam };

	return (
		<main
			className="rootWrapper"
			style={{ paddingBottom: 56 }}
		>
			<HeaderOurTeam />
			<Suspense fallback={<p>Loading...</p>}>
				<Await resolve={user}>
					<UserListWithPagination countPerPage={COUNT_PER_PAGE} />
				</Await>
			</Suspense>
		</main>
	);
};

export default OurTeamPage;
