import HeaderUser from "components/ui/headers/HeaderUser/HeaderUser";
import UserInfo from "components/ui/user/UserInfo/UserInfo";
import { IGetUser } from "models/our-team.model";
import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const UserPage: FC = () => {
	const { user } = useLoaderData() as { user: IGetUser };

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await
				resolve={user}
				errorElement={<p>Error</p>}
			>
				{(user) => (
					<main
						className="rootWrapper"
						style={{ paddingBottom: 56 }}
					>
						<HeaderUser user={user.data} />
						<UserInfo user={user.data} />
					</main>
				)}
			</Await>
		</Suspense>
	);
};

export default UserPage;
