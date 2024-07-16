import { createButtons } from "utils/helpers/pagination";
import styles from "./Pagination.module.scss";
import { FC, MouseEventHandler, useMemo } from "react";

interface PaginationProps {
	current: number;
	totalPages: number;
	onChangePage: (page: number) => void;
}

const DIRECTION = { left: "left", right: "right" };

const Pagination: FC<PaginationProps> = ({ onChangePage, totalPages, current }) => {
	const buttons = useMemo(() => createButtons(current, totalPages), [current, totalPages]);

	const handleClickPagination: MouseEventHandler<HTMLDivElement> = ({ target }) => {
		const el = target as HTMLElement;

		if (el.className !== styles.pagination) {
			if (el.getAttribute("data-direction") === DIRECTION.left) {
				onChangePage(current - 1);
				return;
			}
			if (el.getAttribute("data-direction") === DIRECTION.right) {
				onChangePage(current + 1);
				return;
			}
			if (el.hasAttribute("data-id")) {
				onChangePage(Number(el.getAttribute("data-id")));
			}
		}
	};

	return (
		<div
			className={styles.pagination}
			onClick={handleClickPagination}
		>
			<button
				className={styles.arrow}
				data-direction={DIRECTION.left}
				type="button"
				title="Назад"
				disabled={current === 1}
			>
				{"<"}
			</button>
			{buttons.map((btn) => (
				<button
					type="button"
					key={btn}
					data-id={btn}
					className={`${styles.btnPagination} ${current === btn ? styles.btnActive : ""}`}
					disabled={current === btn}
				>
					{btn}
				</button>
			))}
			<button
				className={styles.arrow}
				type="button"
				title="Вперёд"
				data-direction={DIRECTION.right}
				disabled={current >= totalPages}
			>
				{">"}
			</button>
		</div>
	);
};

export default Pagination;
