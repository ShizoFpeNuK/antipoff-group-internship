import { ROUTES } from "utils/routes";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { useAppSelector } from "hooks/redux";

// TODO: Превратить в хук
const AnyPage: FC = () => {
	const { isAuth } = useAppSelector((state) => state.clientReducer);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate(ROUTES.SING_IN);
			return;
		}

		navigate(ROUTES.OUR_TEAM);
	}, [isAuth, navigate]);

	return <Outlet />;
};

export default AnyPage;
