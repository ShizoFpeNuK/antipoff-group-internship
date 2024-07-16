import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientLogin, clientLogout, clientRegister } from "../actions/ActionCreators";

interface IClientState {
	isAuth: boolean;
	isLoading: boolean;
	isGetLocalStorage: boolean;
}

const initialState: IClientState = {
	isAuth: false,
	isLoading: false,
	isGetLocalStorage: false,
};

export const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsGetLocalStorage: (state, action: PayloadAction<boolean>) => {
			state.isGetLocalStorage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(clientRegister.fulfilled, (state) => {
			state.isAuth = true;
			state.isLoading = false;
		});
		builder.addCase(clientRegister.rejected, (state) => {
			state.isAuth = false;
			state.isLoading = false;
		});
		builder.addCase(clientRegister.pending, (state) => {
			state.isAuth = false;
			state.isLoading = true;
		});

		builder.addCase(clientLogin.fulfilled, (state) => {
			state.isAuth = true;
			state.isLoading = false;
		});
		builder.addCase(clientLogin.rejected, (state) => {
			state.isAuth = false;
			state.isLoading = false;
		});
		builder.addCase(clientLogin.pending, (state) => {
			state.isAuth = false;
			state.isLoading = true;
		});

		builder.addCase(clientLogout.fulfilled, (state) => {
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
