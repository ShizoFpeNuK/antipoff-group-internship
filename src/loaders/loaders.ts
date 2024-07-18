import { appStore } from "store/store";
import { ourTeamApi } from "services/our-team.service";
import { IErrorResponse } from "utils/types/error-response.type";
import { defer, json, LoaderFunctionArgs, Params } from "react-router-dom";

export const teamLoader = ({ request }: LoaderFunctionArgs, countPerPage?: number) => {
	const query = new URL(request.url).searchParams;
	const queryPage = Number(query.get("page"));

	const data = appStore.dispatch(
		ourTeamApi.endpoints.getAll.initiate({
			page: queryPage > 0 ? queryPage : 1,
			per_page: countPerPage,
		}),
	);
	const user = data.unwrap();

	return defer({ user });
};

export const userLoader = ({ params }: LoaderFunctionArgs<Params<"userId">>) => {
	const id = Number(params.userId);

	if (!Number.isInteger(id)) {
		throw json<IErrorResponse>({ message: "Ошибка userId" }, { status: 400 });
	}

	const data = appStore.dispatch(ourTeamApi.endpoints.getUserById.initiate(id));
	const user = data.unwrap();

	return defer({ user });
};
