import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetUser, IOurTeam } from "models/our-team.model";
import { axiosBaseQuery } from "utils/configs/rtk-query.config";

interface IParams {
	page?: number;
	per_page?: number;
}

const PATH_DEFAULT = "/users";

export const ourTeamApi = createApi({
	reducerPath: "ourTeam",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["Team", "User"],
	endpoints: (build) => ({
		getAll: build.query<IOurTeam, IParams | void>({
			query: (params = { page: 1, per_page: 4 }) => ({
				url: PATH_DEFAULT,
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
				url: `${PATH_DEFAULT}/${id}`,
			}),
			providesTags: (result, error, id) => [{ type: "User", id }],
		}),
		updateAvatarById: build.mutation<any, number>({
			query: (id) => ({
				url: `${PATH_DEFAULT}/${id}`,
				method: "PUT",
			}),
			invalidatesTags: (result, error, id) => [{ type: "User", id }],
		}),
	}),
});
