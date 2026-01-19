import DateHelper from "./dateHelper.js"

// CONSTANTS
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

const offmonthDayClass = "calendar-date-offmonth"
const weekdayClass = "calendar-weekday"
const dateClass = "calendar-date"
// END CONSTANTS

// Elements
const currentDate = new DateHelper()
const currentMonthDiv = document.getElementById("current-month-div")
const calendarDaysGrid = document.getElementById("calendar-days-grid")
const calendarLeftButton = document.getElementById("calendar-left-button")
const calendarRightButton = document.getElementById("calendar-right-button")

function OnWindowLoad() {
	RebuildCalendar()
}

function RebuildCalendar() {
	calendarDaysGrid.innerHTML = ""

	currentMonthDiv.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
	weekdays.forEach((day) => {
		const dayDiv = document.createElement("div")
		dayDiv.classList.add(weekdayClass)
		dayDiv.innerHTML = day
		calendarDaysGrid.appendChild(dayDiv)
	})

	let currentMonth = false
	let daysInCurrentMonth = currentDate.getDaysInPreviousMonth(currentDate)
	const firstWeekdayOfMonth = currentDate.getFirstWeekdayOfMonth(currentDate)
	let dayNumber =
		daysInCurrentMonth -
		(firstWeekdayOfMonth === 0 ? 7 : firstWeekdayOfMonth) +
		1
	for (let i = 0; i < weekdays.length; i++) {
		for (let j = 0; j < 6; j++) {
			const dayDiv = document.createElement("div")
			dayDiv.innerHTML = dayNumber
			dayDiv.classList.add(dateClass)
			if (!currentMonth) dayDiv.classList.add(offmonthDayClass)
			calendarDaysGrid.appendChild(dayDiv)
			dayNumber = (dayNumber + 1) % (daysInCurrentMonth + 1)
			if (dayNumber === 0) {
				dayNumber++
				daysInCurrentMonth = currentDate.getDaysInCurrentMonth(currentDate)
				currentMonth = !currentMonth
			}
		}
	}
}

function UpdateMonth(n) {
	currentDate.addMonth(n)
	currentDate.setDate(1)
	RebuildCalendar()
}

// Setup
calendarLeftButton.addEventListener("click", (_) => UpdateMonth(-1))
calendarRightButton.addEventListener("click", (_) => UpdateMonth(1))
window.addEventListener("load", OnWindowLoad)
