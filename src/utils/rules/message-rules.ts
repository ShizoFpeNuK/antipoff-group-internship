export const enum MESSAGE_ERROR {
	REQUIRED = "Поле является обязательным!",
	// ONLY_LATIN_AND_NUMBERS = "Только буквы латинского алфавита и цифры!",
	FULL_NAME = "Только буквы, тире и пробелы!",
	EMAIL = "Некорректный ввод! Пример: example@gmail.com.",
	PASSWORD = "Только буквы латинского алфавита, цифры и спецзнаки!",
	MIN_LENGTH_PASSWORD = "Пароль должен содержать не менее 6 символов!",
	CONFIRM_PASSWORD = "Пароли должны совпадать!",
}
