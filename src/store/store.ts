import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientReducer from "./reducers/ClientSlice";
import { ourTeamApi } from "services/our-team.service";

const rootReducer = combineReducers({
	clientReducer,
	[ourTeamApi.reducerPath]: ourTeamApi.reducer,
});

export const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ourTeamApi.middleware),
		devTools: true,
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
