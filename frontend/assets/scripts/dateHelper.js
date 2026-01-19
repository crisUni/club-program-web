export default class DateHelper {
	#currentDate

	constructor(date = null) {
		if (!DateHelper.isDate(date)) date = new Date()
		this.#currentDate = date
	}

	static isDate(value) {
		return value instanceof Date && !Number.isNaN(value.getTime())
	}

	setDate(n) {
		this.#currentDate.setDate(n)
	}

	addMonth(n) {
		this.#currentDate.setMonth(this.#currentDate.getMonth() + n)
	}

	getMonth() {
		return this.#currentDate.getMonth()
	}

	getFullYear() {
		return this.#currentDate.getFullYear()
	}

	getDaysInCurrentMonth() {
		const year = this.#currentDate.getFullYear()
		const month = this.#currentDate.getMonth()
		return new Date(year, month + 1, 0).getDate()
	}

	getDaysInPreviousMonth() {
		const year = this.#currentDate.getFullYear()
		const month = this.#currentDate.getMonth()
		return new Date(year, month, 0).getDate() // day 0 of current month => last day of previous
	}

	getFirstWeekdayOfMonth() {
		const firstOfMonth = new Date(
			this.#currentDate.getFullYear(),
			this.#currentDate.getMonth(),
			1,
		)
		return firstOfMonth.getDay() // 0 = Sunday .. 6 = Saturday
	}
}
