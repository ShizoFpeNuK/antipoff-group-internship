import "./index.scss";
import AnyPage from "pages/AnyPage";
import UserPage from "pages/UserPage";
import ReactDOM from "react-dom/client";
import SingUpPage from "pages/auth-pages/SingUpPage";
import SingInPage from "pages/auth-pages/SingInPage";
import OurTeamPage from "pages/OurTeamPage";
import AuthProvider from "components/providers/AuthProvider";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import StoreInitializer from "components/StoreInitializer/StoreInitializer";
import { ROUTES } from "utils/routes";
import { appStore } from "store/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { teamLoader, userLoader } from "loaders/loaders";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const COUNT_PER_PAGE = 4;

const router = createBrowserRouter([
	{ path: ROUTES.SING_UP, element: <SingUpPage /> },
	{ path: ROUTES.SING_IN, element: <SingInPage /> },
	{
		element: <AuthProvider />,
		children: [
			{
				path: ROUTES.OUR_TEAM,
				element: <OurTeamPage />,
				loader: (arg) => teamLoader(arg, COUNT_PER_PAGE),
			},
			{
				path: `${ROUTES.OUR_TEAM}/:userId`,
				element: <UserPage />,
				loader: userLoader,
				errorElement: <ErrorBoundary />,
			},
		],
	},
	{
		path: ROUTES.ALL,
		element: <AnyPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<Provider store={appStore}>
			<StoreInitializer />
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
