interface ErrorFormField {
	error: boolean;
	message: string;
}

export type ErrorsForm<K extends string> = {
	[P in K]: ErrorFormField;
};

export type ValuesForm<K extends string> = {
	[P in K]: string;
};
