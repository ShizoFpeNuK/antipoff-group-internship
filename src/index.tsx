import "./index.scss";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "utils/routes";
import AuthPage from "pages/AuthPage";
import OurTeamPage from "pages/OurTeamPage";
import AnyPage from "pages/AnyPage";
import UserPage from "pages/UserPage";

const router = createBrowserRouter([
	{
		path: ROUTES.AUTH,
		element: <AuthPage />,
	},
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
