interface IOptionsCookie {
	"domain"?: string;
	"path"?: string;
	"expires"?: string | Date;
	"max-age"?: string | number;
	"secure"?: boolean;
	"samesite"?: "strict" | "lax";
	"httpOnly"?: boolean;
}

export const getCookie = (name: string) => {
	let matches = document.cookie.match(
		new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"),
	);

	return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (
	name: string,
	value: string | number | boolean,
	options: IOptionsCookie = {},
) => {
	options = {
		path: "/",
		expires: "",
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	let optionKey: keyof IOptionsCookie;

	for (optionKey in options) {
		if (options[optionKey]) {
			if (options[optionKey] === true) {
				updatedCookie += "; " + optionKey;
			} else {
				updatedCookie += "; " + optionKey + "=" + options[optionKey];
			}
		}
	}

	document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
	setCookie(name, "", {
		"max-age": -1,
	});
};
