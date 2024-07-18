import ClientService from "services/client.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IClientRes, IClientForm } from "models/client.model";

export const clientRegister = createAsyncThunk<IClientRes, IClientForm>(
	"/register",
	async (client) => {
		const res = await ClientService.register(client);
		return { token: res.token, data: { email: client.email } };
	},
);

export const clientLogin = createAsyncThunk<IClientRes, IClientForm>("/login", async (client) => {
	const res = await ClientService.login(client);
	return { token: res.token, data: { email: client.email } };
});

export const clientLogout = createAsyncThunk("/logout", async () => {
	const res = await ClientService.logout();
	return res;
});
