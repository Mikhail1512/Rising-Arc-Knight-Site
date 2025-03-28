import { generateHeader } from "./header.js";
import { hoursOfTheDays } from "../data/hoursOfTheDay.js";

document.querySelector('.js-calender-header').innerHTML = generateHeader();

function generateHourlyTimeTable() {
    const timeTableBody = document.querySelector('.body-hours-display');

    let timeTableHTML = '';

    hoursOfTheDays.forEach((hourlyInfo) => {
        hourlyInfo.taskText = 'Sleep';

        timeTableHTML += `
            <div class="time-table-hours">
                <div class="hour-task-texts js-hour-task-text">${hourlyInfo.taskText}</div>
                <div class="bottom-row-hour-container">
                    <div class="js-hour-time-display">${hourlyInfo.startTime} - ${hourlyInfo.endTime}</div>
                    <div class="hours-button-container">
                        <button class="js-hour-update-button">Update</button>
                        <button class="js-hour-remove-button">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    timeTableBody.innerHTML = timeTableHTML;

};

generateHourlyTimeTable();


