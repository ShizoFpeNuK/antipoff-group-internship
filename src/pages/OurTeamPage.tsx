import HeaderOurTeam from "components/ui/headers/HeaderOurTeam/HeaderOurTeam";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import UserListWithPagination from "components/ui/our_team/UserListWithPagination/UserListWithPagination";
import { COUNT_PER_PAGE } from "index";
import { IOurTeam } from "models/our-team.model";
import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const OurTeamPage: FC = () => {
	const { user } = useLoaderData() as { user: IOurTeam };

	return (
		<div className="root_wrapper root_flex">
			<HeaderOurTeam />
			<main style={{flex: "1 1 auto", display: "flex", flexDirection: "column"  }}>
				<Suspense fallback={<MainLoader size={100} />}>
					<Await resolve={user}>
						<UserListWithPagination countPerPage={COUNT_PER_PAGE} />
					</Await>
				</Suspense>
			</main>
		</div>
	);
};

export default OurTeamPage;
