import { FC, useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import Pagination from "components/ui/paginations/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { ourTeamApi } from "services/our-team.service";
import styles from "./UserListWithPagination.module.scss";
import MainLoader from "components/ui/loaders/MainLoader/MainLoader";

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
					<Error />
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

const Error: FC = () => {
	return (
		<div className={styles.error}>
			<h2 className="root_h2" style={{fontWeight: "bold"}}>Ничего не найдено</h2>
			<p>Попробуйте изменить параметры поиска</p>
		</div>
	);
};
