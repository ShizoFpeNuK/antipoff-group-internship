import { createApi } from "@reduxjs/toolkit/query/react";
import { IOurTeam } from "models/our-team.model";
import { axiosBaseQuery } from "utils/configs/rtk-query.config";

interface IParams {
	page?: number;
	per_page?: number;
}

export const ourTeamApi = createApi({
	reducerPath: "ourTeam",
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getAllOurTeam: build.query<IOurTeam, IParams | void>({
			query: (params = { page: 1, per_page: 3 }) => ({
				url: "/users",
				params,
			}),
		}),
	}),
});
