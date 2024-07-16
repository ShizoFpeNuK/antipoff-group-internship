import { FC, useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import Pagination from "components/ui/paginations/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { ourTeamApi } from "services/our-team.service";

const initialPage = (query: URLSearchParams) => {
	const page = Number(query.get("page"));
	return page > 0 && Number.isInteger(page) ? page : 1;
};

interface UserListWithPaginationProps {
	countPerPage?: number;
}

const UserListWithPagination: FC<UserListWithPaginationProps> = ({ countPerPage }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState<number>(() => initialPage(searchParams));
	const { data: team } = ourTeamApi.useGetAllQuery({
		page: currentPage,
		per_page: countPerPage,
	});

	useEffect(() => {
		setSearchParams({ page: currentPage.toString() }, { replace: true });
	}, [currentPage, setSearchParams]);

	return (
		<>
			<UserList users={team!.data} />
			<Pagination
				totalPages={team!.total_pages}
				current={currentPage < team!.total_pages ? currentPage : team!.total_pages}
				onChangePage={setCurrentPage}
			/>
		</>
	);
};

export default UserListWithPagination;
