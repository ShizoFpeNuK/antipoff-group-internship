import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetUser, IOurTeam } from "models/our-team.model";
import { axiosBaseQuery } from "utils/configs/rtk-query.config";

interface IParams {
	page?: number;
	per_page?: number;
}

export const ourTeamApi = createApi({
	reducerPath: "ourTeam",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["Team"],
	endpoints: (build) => ({
		getAll: build.query<IOurTeam, IParams | void>({
			query: (params = { page: 1, per_page: 4 }) => ({
				url: "/users",
				params,
			}),
			providesTags: (result) =>
				result
					? [
							...result.data.map(({ id }) => ({ type: "Team" as const, id })),
							{ type: "Team", id: "PARTIAL-LIST" },
					  ]
					: [{ type: "Team", id: "PARTIAL-LIST" }],
		}),
		getUserById: build.query<IGetUser, number>({
			query: (id) => ({
				url: `/users/${id}`,
			}),
		}),
	}),
});
