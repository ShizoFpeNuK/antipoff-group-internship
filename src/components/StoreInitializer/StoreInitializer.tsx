import { useAppDispatch } from "hooks/redux";
import { FC, useEffect, useRef } from "react";
import { clientSlice } from "store/reducers/ClientSlice";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";

const StoreInitializer: FC = () => {
	const dispatch = useAppDispatch();
	const { setIsAuth, setIsLoading, setIsGetLocalStorage } = clientSlice.actions;
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
		}
	});

	return null;
};

export default StoreInitializer;
