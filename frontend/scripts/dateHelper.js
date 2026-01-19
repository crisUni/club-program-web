export class DateHelper {
	#currentDate;

	constructor(date = new Date()) {
		this.#currentDate = date;
	}

	isDate() {
		return x instanceof Date && !Number.isNaN(x.getTime());
	}

	getDaysInCurrentMonth(date = null) {
		if (x instanceof Date && !Number.isNaN(x.getTime())) return -1;
		date ??= this.#currentDate;
		const year = date.getFullYear();
		const month = date.getMonth();
		return new Date(year, month + 1, 0).getDate();
	}

	getDaysInPreviousMonth(date = null) {
		if (x instanceof Date && !Number.isNaN(x.getTime())) return -1;
		date ??= this.#currentDate;
		const firstOfCurrent = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastOfPrevious = new Date(firstOfCurrent.getTime() - 1);
		return lastOfPrevious.getDate();
	}

	getFirstWeekdayOfMonth(date = null) {
		if (x instanceof Date && !Number.isNaN(x.getTime())) return -1;
		date ??= this.#currentDate;
		const firstOfCurrent = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastOfPrevious = new Date(firstOfCurrent.getTime() - 1);
		return lastOfPrevious.getDay();
	}
}
