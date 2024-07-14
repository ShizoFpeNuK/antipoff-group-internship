import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientReducer from "./reducers/ClientSlice";
import { ourTeamApi } from "services/our-team.service";

const rootReducer = combineReducers({
	clientReducer,
	[ourTeamApi.reducerPath]: ourTeamApi.reducer,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ourTeamApi.middleware),
		devTools: true,
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
