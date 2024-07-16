import { useAppSelector } from "hooks/redux";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "utils/routes";

const AuthProvider: FC = () => {
	const { isAuth, isGetLocalStorage } = useAppSelector((state) => state.clientReducer);

	if (isGetLocalStorage) {
		if (!isAuth) {
			return (
				<Navigate
					to={ROUTES.SING_IN}
					replace
				/>
			);
		}

		return <Outlet />;
	}
  
	return <p>Loading...</p>;
};

export default AuthProvider;
