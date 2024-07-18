import { RootState } from "store/store";
import { Middleware } from "@reduxjs/toolkit";
import { NAME_COOKIES } from "utils/helpers/name-cookies";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";
import { deleteCookie, setCookie } from "utils/helpers/cookies";
import { clientLogin, clientLogout, clientRegister } from "store/actions/client.actions";

export const authMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
	if (clientRegister.fulfilled.match(action)) {
		const { token, data } = action.payload;
		localStorage.setItem(NAME_LOCALSTORAGE.CLIENT, JSON.stringify(data));
		setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
	}
	if (clientRegister.rejected.match(action)) {
		localStorage.removeItem(NAME_LOCALSTORAGE.CLIENT);
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	if (clientLogin.fulfilled.match(action)) {
		const { token, data } = action.payload;
		localStorage.setItem(NAME_LOCALSTORAGE.CLIENT, JSON.stringify(data));
		setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
	}
	if (clientLogin.rejected.match(action)) {
		localStorage.removeItem(NAME_LOCALSTORAGE.CLIENT);
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	if (clientLogout.fulfilled.match(action)) {
		localStorage.removeItem(NAME_LOCALSTORAGE.CLIENT);
		deleteCookie(NAME_COOKIES.TOKEN);
	}

	return next(action);
};
