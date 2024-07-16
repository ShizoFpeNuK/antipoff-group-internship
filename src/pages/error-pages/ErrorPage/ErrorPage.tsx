import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		console.log(error);
		return <div>{error.data.message}</div>;
	}

	return <div>Oops</div>;
}

export default ErrorPage; 