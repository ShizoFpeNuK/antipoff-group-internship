import { createAsyncThunk } from "@reduxjs/toolkit";
import { IClient } from "models/client.model";
import ClientService from "services/client.service";

export const clientRegister = createAsyncThunk("/register", async (client: IClient) => {
	const res = await ClientService.register(client);
	return res;
});

export const clientLogin = createAsyncThunk("/login", async (client: IClient) => {
	const res = await ClientService.login(client);
	return res;
});

export const clientLogout = createAsyncThunk("/logout", async () => {
	const res = await ClientService.logout();
	return res;
});
