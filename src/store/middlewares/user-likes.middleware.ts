import { RootState } from "store/store";
import { Middleware } from "@reduxjs/toolkit";
import { usersLikeSlice } from "store/reducers/UsersLikeSlice";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";

export const usersLikeMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
	if (
		usersLikeSlice.actions.addUserLikeId.match(action) ||
		usersLikeSlice.actions.removeUserLikeId.match(action)
	) {
		let result = next(action);

		const state = store.getState();
		localStorage.setItem(
			NAME_LOCALSTORAGE.USERS_LIKE_ID,
			JSON.stringify(state.usersLikeReducer.usersLikeId),
		);

		return result;
	}

	return next(action);
};
