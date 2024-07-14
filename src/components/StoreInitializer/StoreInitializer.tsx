import { useAppDispatch } from "hooks/redux";
import { FC, useEffect, useRef } from "react";
import { clientSlice } from "store/reducers/ClientSlice";

const StoreInitializer: FC = () => {
	const dispatch = useAppDispatch();
	const { setIsAuth } = clientSlice.actions;

	const isInitialized = useRef(false);

	useEffect(() => {
		if (!isInitialized.current) {
			const isAuthClient = localStorage.getItem("isAuth");

			if (isAuthClient) {
				dispatch(setIsAuth(JSON.parse(isAuthClient)));
			}

			isInitialized.current = true;
		}
	});

	return null;
};

export default StoreInitializer;
