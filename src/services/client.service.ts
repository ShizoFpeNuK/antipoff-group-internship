import axios from "axios";
import { IClientForm, IToken } from "models/client.model";
import serverAPI from "utils/configs/axios.config";

class ClientService {
	static async register(client: IClientForm): Promise<IToken> {
		const token = await axios.post<IToken>(`${process.env.REACT_APP_SERVER_URL}/register`, client);

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
