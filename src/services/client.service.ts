import axios from "axios";
import { IClientForm, IToken } from "models/client.model";
import serverAPI, { BASE_URL } from "utils/configs/axios.config";

class ClientService {
	static async register(client: IClientForm): Promise<IToken> {
		const token = await axios.post<IToken>(`${BASE_URL}/register`, client);

		return token.data;
	}

	static async login(client: IClientForm): Promise<IToken> {
		const token = await serverAPI.post<IToken>("/login", client);

		return token.data;
	}

	static async logout(): Promise<IToken> {
		const data = await serverAPI.post<IToken>("/logout");

		return data.data;
	}
}

export default ClientService;
