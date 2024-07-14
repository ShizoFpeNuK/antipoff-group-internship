import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientLogin, clientLogout, clientRegister } from "./ActionCreators";
import { deleteCookie, setCookie } from "utils/helpers/cookies";
import { NAME_COOKIES } from "utils/helpers/name-cookies";
import { NAME_LOCALSTORAGE } from "utils/helpers/name-localStorage";

interface IClientState {
	isAuth: boolean;
	isLoading: boolean;
}

const initialState: IClientState = {
	isAuth: false,
	isLoading: false,
};

export const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(clientRegister.fulfilled, (state, { payload: { token } }) => {
			localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "true");
			setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
			state.isAuth = true;
			state.isLoading = false;
		});
		builder.addCase(clientRegister.rejected, (state) => {
			localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
			state.isAuth = false;
			state.isLoading = false;
		});
		builder.addCase(clientRegister.pending, (state) => {
			state.isAuth = false;
			state.isLoading = true;
		});

		builder.addCase(clientLogin.fulfilled, (state, { payload: { token } }) => {
			localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "true");
			setCookie(NAME_COOKIES.TOKEN, token, { secure: true });
			state.isAuth = true;
			state.isLoading = false;
		});
		builder.addCase(clientLogin.rejected, (state) => {
			localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
			state.isAuth = false;
			state.isLoading = false;
		});
		builder.addCase(clientLogin.pending, (state) => {
			state.isAuth = false;
			state.isLoading = true;
		});

		builder.addCase(clientLogout.fulfilled, (state) => {
			localStorage.setItem(NAME_LOCALSTORAGE.IS_AUTH, "false");
			deleteCookie(NAME_COOKIES.TOKEN);
			state.isAuth = false;
			state.isLoading = false;
		});
		builder.addCase(clientLogout.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(clientLogout.pending, (state) => {
			state.isLoading = true;
		});
	},
});

export default clientSlice.reducer;
