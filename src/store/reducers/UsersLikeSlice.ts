import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUsersLikeState {
	usersLikeId: number[];
}

const initialState: IUsersLikeState = {
	usersLikeId: [],
};

export const usersLikeSlice = createSlice({
	name: "usersLikeId",
	initialState,
	reducers: {
		setUsersLikeId: (state, action: PayloadAction<number[]>) => {
			state.usersLikeId = action.payload;
		},
		addUserLikeId: (state, action: PayloadAction<number>) => {
			state.usersLikeId.push(action.payload);
		},
		removeUserLikeId: (state, action: PayloadAction<number>) => {
			state.usersLikeId = state.usersLikeId.filter((id) => id !== action.payload);
		},
	},
});

export default usersLikeSlice.reducer;
