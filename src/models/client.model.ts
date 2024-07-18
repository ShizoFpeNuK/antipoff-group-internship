export interface IToken {
	token: string;
}

export interface IClientForm {
	email: string;
	password: string;
}
export interface IClient {
	email: string;
}

export interface IClientRes extends IToken {
	data: IClient;
}
