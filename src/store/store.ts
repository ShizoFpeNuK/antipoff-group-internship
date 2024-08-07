import clientReducer from "./reducers/ClientSlice";
import usersLikeReducer from "./reducers/UsersLikeSlice";
import { ourTeamApi } from "services/our-team.service";
import { authMiddleware } from "./middlewares/auth.middleware";
import { usersLikeMiddleware } from "./middlewares/user-likes.middleware";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	clientReducer,
	usersLikeReducer,
	[ourTeamApi.reducerPath]: ourTeamApi.reducer,
});

const isDevTools = process.env.NODE_ENV === "development";

export const appStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ourTeamApi.middleware, authMiddleware, usersLikeMiddleware),
	devTools: isDevTools,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof appStore.dispatch;
