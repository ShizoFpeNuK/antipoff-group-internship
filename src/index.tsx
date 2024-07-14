import "./index.scss";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ROUTES } from "utils/routes";
import SingUpPage from "pages/SingUpPage";
import OurTeamPage from "pages/OurTeamPage";
import AnyPage from "pages/AnyPage";
import UserPage from "pages/UserPage";
import SingInPage from "pages/SingInPage";

const router = createBrowserRouter([
	{ path: ROUTES.SING_UP, element: <SingUpPage /> },
	{ path: ROUTES.SING_IN, element: <SingInPage /> },
	{
		path: ROUTES.OUR_TEAM,
		element: <OurTeamPage />,
	},
	{
		path: `${ROUTES.OUR_TEAM}/:userId`,
		element: <UserPage />,
	},
	{
		path: ROUTES.ALL,
		element: <AnyPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
