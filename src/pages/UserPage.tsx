import HeaderUser from "components/ui/headers/HeaderUser/HeaderUser";
import UserInfo from "components/ui/user/UserInfo/UserInfo";
import { IGetUser } from "models/our-team.model";
import { FC, Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import { ourTeamApi } from "services/our-team.service";

const UserPage: FC = () => {
	const { user } = useLoaderData() as { user: IGetUser };

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await
				resolve={user}
				errorElement={<p>Error</p>}
			>
				<main
					className="rootWrapper"
					style={{ paddingBottom: 56 }}
				>
					<Container />
				</main>
			</Await>
		</Suspense>
	);
};

export default UserPage;

const Container: FC = () => {
	const params = useParams();
	const { data: user, isFetching } = ourTeamApi.useGetUserByIdQuery(Number(params["userId"]));

	if (isFetching) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<HeaderUser user={user!.data} />
			<UserInfo user={user!.data} />
		</>
	);
};
