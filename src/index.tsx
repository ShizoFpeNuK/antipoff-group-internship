import "./index.scss";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "utils/routes";
import SingUpPage from "pages/SingUpPage";
import OurTeamPage from "pages/OurTeamPage";
import AnyPage from "pages/AnyPage";
import UserPage from "pages/UserPage";
import SingInPage from "pages/SingInPage";
import { Provider } from "react-redux";
import { store } from "store/store";
import StoreInitializer from "components/StoreInitializer/StoreInitializer";
import AuthProvider from "components/providers/AuthProvider";
import ErrorPage from "pages/error-pages/ErrorPage/ErrorPage";
import { teamLoader, userLoader } from "loaders/loaders";

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
				errorElement: <ErrorPage />,
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
		<Provider store={store}>
			<StoreInitializer />
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
