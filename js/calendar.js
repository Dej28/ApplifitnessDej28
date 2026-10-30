/*
=========================
CALENDAR.JS
=========================
*/

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {

    const container =
        document.getElementById("calendar");

    if (!container) return;

    container.innerHTML = "";

    const firstDay =
        new Date(
            currentYear,
            currentMonth,
            1
        ).getDay();

    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();

    const title =
        document.getElementById(
            "calendarTitle"
        );

    title.textContent =
        new Date(
            currentYear,
            currentMonth
        ).toLocaleDateString(
            "fr-CA",
            {
                month: "long",
                year: "numeric"
            }
        );

    for (let i = 0; i < firstDay; i++) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day empty";

        container.appendChild(empty);

    }

    for (let day = 1; day <= daysInMonth; day++) {

        const cell =
            document.createElement("div");

        cell.className =
            "calendar-day";

        cell.textContent = day;

        const key =
            `${currentYear}-${currentMonth}-${day}`;

        const note =
            localStorage.getItem(key);

        if (note) {

            cell.classList.add(
                "calendar-event"
            );

        }

        cell.addEventListener(
            "click",
            () => {
                editDay(key);
            }
        );

        container.appendChild(cell);
    }
}

function editDay(key) {

    const current =
        localStorage.getItem(key) || "";

    const event =
        prompt(
            "Séance prévue :",
            current
        );

    if (event !== null) {

        localStorage.setItem(
            key,
            event
        );

        renderCalendar();
    }
}

function previousMonth() {

    currentMonth--;

    if (currentMonth < 0) {

        currentMonth = 11;
        currentYear--;

    }

    renderCalendar();
}

function nextMonth() {

    currentMonth++;

    if (currentMonth > 11) {

        currentMonth = 0;
        currentYear++;

    }

    renderCalendar();
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const prev =
            document.getElementById(
                "prevMonthBtn"
            );

        const next =
            document.getElementById(
                "nextMonthBtn"
            );

        if (prev) {
            prev.onclick =
                previousMonth;
        }

        if (next) {
            next.onclick =
                nextMonth;
        }

        renderCalendar();
    }
);
