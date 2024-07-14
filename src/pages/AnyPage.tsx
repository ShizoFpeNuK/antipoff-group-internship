import { ROUTES } from "utils/routes";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";

// TODO: Превратить в хук
const AnyPage: FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate(ROUTES.SING_IN);
			return;
		}

		navigate(ROUTES.OUR_TEAM);
	});

	return null;
};

export default AnyPage;
