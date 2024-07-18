import { IClient, IClientRes } from "models/client.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientLogin, clientLogout, clientRegister } from "../actions/client.actions";

interface IClientState {
	isError: boolean;
	isLoading: boolean;
	isGetLocalStorage: boolean;
	client: IClient | null;
}

const initialState: IClientState = {
	isError: false,
	isLoading: false,
	isGetLocalStorage: false,
	client: null,
};

export const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload;
		},
		setIsGetLocalStorage: (state, action: PayloadAction<boolean>) => {
			state.isGetLocalStorage = action.payload;
		},
		setClient: (state, action: PayloadAction<IClient>) => {
			state.client = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(clientRegister.fulfilled, (state, action: PayloadAction<IClientRes>) => {
			state.isLoading = false;
			state.client = action.payload.data;
		});
		builder.addCase(clientRegister.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
		builder.addCase(clientRegister.pending, (state) => {
			state.isError = false;
			state.isLoading = true;
			state.client = null;
		});

		builder.addCase(clientLogin.fulfilled, (state, action: PayloadAction<IClientRes>) => {
			state.isLoading = false;
			state.client = action.payload.data;
		});
		builder.addCase(clientLogin.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
		builder.addCase(clientLogin.pending, (state) => {
			state.isError = false;
			state.isLoading = true;
			state.client = null;
		});

		builder.addCase(clientLogout.fulfilled, (state) => {
			state.isLoading = false;
			state.client = null;
		});
		builder.addCase(clientLogout.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
		builder.addCase(clientLogout.pending, (state) => {
			state.isError = false;
			state.isLoading = true;
		});
	},
});

export default clientSlice.reducer;
