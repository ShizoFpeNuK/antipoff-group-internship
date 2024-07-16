type Position = "start" | "center" | "end";

export const createButtons = (
	current: number,
	total: number,
	position: Position = "center",
	limitTotal: number = 5,
): number[] => {
	const buttons: number[] = [];
	const dif = total - current;
	const limitCurrent = Math.floor(limitTotal / 2);

	if (position === "center") {
		if (total > limitTotal) {
			if (current > limitCurrent) {
				if (dif <= limitCurrent) {
					for (let i = current - (limitCurrent * 2 - dif); i <= total; i++) {
						buttons.push(i);
					}
				} else {
					for (let i = current - limitCurrent; i <= current + limitCurrent; i++) {
						buttons.push(i);
					}
				}
			} else {
				for (let i = 1; i <= limitTotal; i++) {
					buttons.push(i);
				}
			}
		} else {
			for (let i = 1; i <= total; i++) {
				buttons.push(i);
			}
		}
	}

	if (position === "start") {
		if (total > limitTotal) {
			if (current + limitTotal <= total) {
				for (let i = current; i <= current + limitTotal - 1; i++) {
					buttons.push(i);
				}
			} else {
				for (let i = current - (limitCurrent * 2 - dif); i <= total; i++) {
					buttons.push(i);
				}
			}
		} else {
			for (let i = 1; i <= total; i++) {
				buttons.push(i);
			}
		}
	}

	if (position === "end") {
		if (total > limitTotal) {
			if (current <= limitTotal) {
				for (let i = 1; i <= limitTotal; i++) {
					buttons.push(i);
				}
			} else {
				for (let i = current - limitTotal + 1; i <= current; i++) {
					buttons.push(i);
				}
			}
		} else {
			for (let i = 1; i <= total; i++) {
				buttons.push(i);
			}
		}
	}

	return buttons;
};
