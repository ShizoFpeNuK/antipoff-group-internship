import { useAppDispatch } from "hooks/redux";
import { FC, useEffect, useRef } from "react";
import { clientSlice } from "store/reducers/ClientSlice";
import { usersLikeSlice } from "store/reducers/UsersLikeSlice";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";

const StoreInitializer: FC = () => {
	const dispatch = useAppDispatch();
	const { setIsAuth, setIsLoading, setIsGetLocalStorage } = clientSlice.actions;
	const { setUsersLikeId } = usersLikeSlice.actions;
	const isInitialized = useRef(false);

	useEffect(() => {
		if (!isInitialized.current) {
			isInitialized.current = true;
			dispatch(setIsLoading(true));
			const isAuthClient = localStorage.getItem(NAME_LOCALSTORAGE.IS_AUTH);

			if (isAuthClient) {
				dispatch(setIsAuth(JSON.parse(isAuthClient)));
				dispatch(setIsLoading(false));
			}

			dispatch(setIsGetLocalStorage(true));

			const usersLikeId = localStorage.getItem(NAME_LOCALSTORAGE.USERS_LIKE_ID);
			if (usersLikeId) {
				dispatch(setUsersLikeId(JSON.parse(usersLikeId)));
			}
		}
	});

	return null;
};

export default StoreInitializer;
