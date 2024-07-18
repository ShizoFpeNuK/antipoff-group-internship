import { clientSlice } from "store/reducers/ClientSlice";
import { useAppDispatch } from "hooks/redux";
import { usersLikeSlice } from "store/reducers/UsersLikeSlice";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";
import { FC, useEffect, useRef } from "react";

const StoreInitializer: FC = () => {
	const dispatch = useAppDispatch();
	const { setIsLoading, setIsGetLocalStorage, setClient } = clientSlice.actions;
	const { setUsersLikeId } = usersLikeSlice.actions;
	const isInitialized = useRef(false);

	useEffect(() => {
		if (!isInitialized.current) {
			isInitialized.current = true;

			dispatch(setIsLoading(true));
			const client = localStorage.getItem(NAME_LOCALSTORAGE.CLIENT);
			if (client) {
				dispatch(setClient(JSON.parse(client)));
			}
			dispatch(setIsLoading(false));
			dispatch(setIsGetLocalStorage(true));

			const usersLikeId = localStorage.getItem(NAME_LOCALSTORAGE.USERS_LIKE_ID);
			if (usersLikeId) {
				dispatch(setUsersLikeId(JSON.parse(usersLikeId)));
			}
		}
	}, [dispatch, setClient, setIsGetLocalStorage, setIsLoading, setUsersLikeId]);

	return null;
};

export default StoreInitializer;
