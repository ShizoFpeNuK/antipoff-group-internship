import ErrorPage from "pages/error-pages/ErrorPage/ErrorPage";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 400) {
			return <ErrorPage title="Параметры переданы в неверном формате" />;
		}

		return <ErrorPage title={error.data.message} />;
	}

	return <ErrorPage />;
};

export default ErrorBoundary;
