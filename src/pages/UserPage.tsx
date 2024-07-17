import HeaderUser from "components/ui/headers/HeaderUser/HeaderUser";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import UserInfo from "components/ui/user/UserInfo/UserInfo";
import { IGetUser } from "models/our-team.model";
import { FC, Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import { ourTeamApi } from "services/our-team.service";
import ErrorPage from "./error-pages/ErrorPage/ErrorPage";

const UserPage: FC = () => {
	const { user } = useLoaderData() as { user: IGetUser };

	return (
		<div className="root_wrapper root_flex">
			<Suspense fallback={<MainLoader size={100} />}>
				<Await
					resolve={user}
					errorElement={<ErrorPage title="Данного пользователя не существует" />}
				>
					<Container />
				</Await>
			</Suspense>
		</div>
	);
};

export default UserPage;

const Container: FC = () => {
	const params = useParams();
	const { data: user, isFetching } = ourTeamApi.useGetUserByIdQuery(Number(params["userId"]));

	if (isFetching) {
		return <MainLoader size={100} />;
	}

	return (
		<>
			<HeaderUser user={user!.data} />
			<main>
				<UserInfo user={user!.data} />
			</main>
		</>
	);
};
