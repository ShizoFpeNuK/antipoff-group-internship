import { MESSAGE_ERROR } from "./message-rules";

export const RULES_FULL_NAME = {
	pattern: {
		value: new RegExp(/^[a-zA-Zа-яА-Яё][a-zA-Zа-яА-Яё\-\s]+[a-zA-Zа-яА-Яё]$/),
		message: MESSAGE_ERROR.FULL_NAME,
	},
};

export const RULES_EMAIL = {
	pattern: {
		value: new RegExp(/^[a-zA-Z\d.]+@[a-z.]+\.[a-z]+$/),
		message: MESSAGE_ERROR.EMAIL,
	},
};

export const RULES_PASSWORD = {
	pattern: {
		value: new RegExp(/^[a-zA-Z!@#:<>"{}[\]$%^&*)(+=._-\d]+$/),
		message: MESSAGE_ERROR.PASSWORD,
	},
	minLength: {
		value: 6,
		message: MESSAGE_ERROR.MIN_LENGTH_PASSWORD,
	},
};

const RULES_FORM = {
	FULL_NAME: RULES_FULL_NAME,
	PASSWORD: RULES_PASSWORD,
	EMAIL: RULES_EMAIL,
};

export default RULES_FORM;
