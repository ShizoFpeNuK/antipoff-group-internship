import styles from "./UserListWithPagination.module.scss";
import UserList from "../UserList/UserList";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";
import Pagination from "components/ui/paginations/Pagination/Pagination";
import ErrorNotFound from "components/ui/errors/ErrorNotFound/ErrorNotFound";
import { ourTeamApi } from "services/our-team.service";
import { useSearchParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";

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
	const { data: team, isFetching } = ourTeamApi.useGetAllQuery({
		page: currentPage,
		per_page: countPerPage,
	});

	useEffect(() => {
		setSearchParams({ page: currentPage.toString() }, { replace: true });
	}, [currentPage, setSearchParams]);

	return (
		<section className={styles.wrapper}>
			{!isFetching ? (
				team!.data.length > 0 ? (
					<UserList users={team!.data} />
				) : (
					<ErrorNotFound />
				)
			) : (
				<MainLoader size={100} />
			)}
			<Pagination
				totalPages={team!.total_pages}
				current={currentPage < team!.total_pages ? currentPage : team!.total_pages}
				onChangePage={setCurrentPage}
				disabledAll={isFetching}
			/>
		</section>
	);
};

export default UserListWithPagination;
