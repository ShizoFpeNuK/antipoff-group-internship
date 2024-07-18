import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import { FC } from "react";
import { ROUTES } from "utils/routes";
import { useAppSelector } from "hooks/redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthProvider: FC = () => {
	const { isGetLocalStorage, client } = useAppSelector((state) => state.clientReducer);

	if (isGetLocalStorage) {
		if (!client) {
			return (
				<Navigate
					to={ROUTES.SING_IN}
					replace
				/>
			);
		}

		return <Outlet />;
	}

	return <MainLoader size={100} />;
};

export default AuthProvider;
