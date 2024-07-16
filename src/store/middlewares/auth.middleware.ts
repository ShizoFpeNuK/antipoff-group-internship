import { Middleware } from "@reduxjs/toolkit";
import { clientLogin, clientLogout, clientRegister } from "store/actions/ActionCreators";
import { RootState } from "store/store";
import { deleteCookie, setCookie } from "utils/helpers/cookies";
import { NAME_COOKIES } from "utils/helpers/name-cookies";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";

export const authMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
	if (clientRegister.fulfilled.match(action)) {
		const { token } = action.payload;
		localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "true");
		setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
	}
	if (clientRegister.rejected.match(action)) {
		localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	if (clientLogin.fulfilled.match(action)) {
		const { token } = action.payload;
		localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "true");
		setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
	}
	if (clientLogin.rejected.match(action)) {
		localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	if (clientLogout.fulfilled.match(action)) {
		localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	return next(action);
};
