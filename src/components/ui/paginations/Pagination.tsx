import styles from "./Pagination.module.scss";
import { FC } from "react";

interface PaginationProps {
	current: number;
	totalPages: number;
	onChangePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ onChangePage, totalPages, current }) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				type="button"
				title="Назад"
				onClick={() => onChangePage(current - 1)}
				disabled={current === 1}
			>
				{"<"}
			</button>
			<span className={styles.navigation}>
				{current} / {totalPages}
			</span>
			<button
				className={styles.arrow}
				type="button"
				title="Вперёд"
				onClick={() => onChangePage(current + 1)}
				disabled={current >= totalPages}
			>
				{">"}
			</button>
		</div>
	);
};

export default Pagination;
