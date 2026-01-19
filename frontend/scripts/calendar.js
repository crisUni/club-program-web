import DateHelper from "./dateHelper.js";

// CONSTANTS
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

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
];

const currentDate = new DateHelper();

const offmonthDayClass = "calendar-date-offmonth";
const weekdayClass = "calendar-weekday";
const dateClass = "calendar-date";
// END CONSTANTS

// Elements
const currentMonthDiv = document.getElementById("current-month-div");
const calendarDaysGrid = document.getElementById("calendar-days-grid");

function OnWindowLoad() {
	calendarDaysGrid.innerHTML = "";

	currentMonthDiv.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
	weekdays.forEach((day) => {
		const dayDiv = document.createElement("div");
		dayDiv.classList.add(weekdayClass);
		dayDiv.innerHTML = day;
		calendarDaysGrid.appendChild(dayDiv);
	});

	let currentMonth = false;
	let daysInCurrentMonth = GetDaysInPreviousMonth(currentDate);
	let dayNumber = daysInCurrentMonth - GetFirstWeekdayOfMonth(currentDate);
	for (let i = 0; i < weekdays.length; i++) {
		for (let j = 0; j < 6; j++) {
			const dayDiv = document.createElement("div");
			dayDiv.innerHTML = dayNumber;
			dayDiv.classList.add(dateClass);
			if (!currentMonth) dayDiv.classList.add(offmonthDayClass);
			calendarDaysGrid.appendChild(dayDiv);
			dayNumber = (dayNumber + 1) % (daysInCurrentMonth + 1);

			if (dayNumber === 0) {
				dayNumber++;
				daysInCurrentMonth = GetDaysInCurrentMonth(currentDate);
				currentMonth = !currentMonth;
			}
		}
	}
}

// Setup
window.onload = () => OnWindowLoad();
