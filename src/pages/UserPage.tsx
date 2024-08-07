import UserInfo from "components/ui/user/UserInfo/UserInfo";
import ErrorPage from "./error-pages/ErrorPage/ErrorPage";
import HeaderUser from "components/ui/headers/HeaderUser/HeaderUser";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import { IGetUser } from "models/our-team.model";
import { ourTeamApi } from "services/our-team.service";
import { FC, Suspense } from "react";
import { useAppSelector } from "hooks/redux";
import { Await, ScrollRestoration, useLoaderData, useParams } from "react-router-dom";

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
	const { client } = useAppSelector((state) => state.clientReducer);

	if (isFetching) {
		return <MainLoader size={100} />;
	}

	return (
		<>
			<HeaderUser
				user={user!.data}
				client={client}
			/>
			<main>
				<UserInfo user={user!.data} />
			</main>
			<ScrollRestoration />
		</>
	);
};
