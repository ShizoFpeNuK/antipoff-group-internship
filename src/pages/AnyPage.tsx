import { ROUTES } from "utils/routes";
import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { useAppSelector } from "hooks/redux";

const AnyPage: FC = () => {
	const { client } = useAppSelector((state) => state.clientReducer);
	const navigate = useNavigate();

	useEffect(() => {
		if (!client) {
			navigate(ROUTES.SING_IN);
			return;
		}

		navigate(ROUTES.OUR_TEAM);
	}, [client, navigate]);

	return null;
};

export default AnyPage;
