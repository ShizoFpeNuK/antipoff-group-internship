import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import { useAppSelector } from "hooks/redux";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "utils/routes";

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
