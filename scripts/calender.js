/* 
 To-do list 
    - make button appear upon clicking the time slot
    - add function to the update and reomve button 
    - create dates of the month calender
    - create an hourly slot detail card for updating and removing tasks


 Ideas 
    : make a eplises button for the detail card 
    : make a quick clear button
    : try to make a permenent and once off remove and update choice
    : have a task history for changes to be undone
*/

import { generateHeader } from "./header.js";
import { hoursOfTheDays } from "../data/hoursOfTheDay.js";

document.querySelector('.js-calender-header').innerHTML = generateHeader();

function generateHourlyTimeTable() {
    const timeTableBody = document.querySelector('.body-hours-display');

    let timeTableHTML = '';

    hoursOfTheDays.forEach((hourlyInfo) => {
        if(hourlyInfo.timedTask.titleText === ''){
            hourlyInfo.timedTask.titleText = '- - -';
        }

        timeTableHTML += `
            <div class="time-table-hours">
                <div class="hour-task-texts js-hour-task-text-${hourlyInfo.id}">${hourlyInfo.timedTask.titleText}</div>
                <div class="bottom-row-hour-container">
                    <div class="js-hour-time-display">${hourlyInfo.startTime} - ${hourlyInfo.endTime}</div>
                    <div class="hours-button-container">
                        <button class="hour-update-button js-hour-update-button-${hourlyInfo.id}">Update</button>
                        <button class="hour-clear-button js-hour-clear-button">Clear</button>
                    </div>
                </div>
            </div>
        `;
    });

    timeTableBody.innerHTML = timeTableHTML;

};

generateHourlyTimeTable();




function updateTimedTasks(){
    hoursOfTheDays.forEach((hourlyInfo) => {
        document.querySelector(`.js-hour-update-button-${hourlyInfo.id}`).addEventListener('click',() => {
            // hourlyInfo.timedTask.titleText = "Not Sleeping";
            // console.log(hourlyInfo.timedTask.titleText);
            // document.querySelector(`.js-hour-task-text-${hourlyInfo.id}`).innerHTML = hourlyInfo.timedTask.titleText;
            controlUpdateGeneration(hourlyInfo);
        });
    });
}

updateTimedTasks();


function controlUpdateGeneration(hourlyInfo){
    const updateHTML = `
        <div class="updating-info-container">
            <div class="updating-card">
                <div class="updating-card-header">
                    <span>Enter new task and confirm</span>
                    <span>⚙️</span>
                </div>
                <div class="title-container">
                    <label>Task Title:</label>
                    <input type="text" class="update-input-title-field" value="${hourlyInfo.timedTask.titleText}">
                </div>
                <div class="description-container">
                    <label>Task Description:</label>
                    <input class="update-input-description-field" value="${hourlyInfo.timedTask.descriptiveText}">
                </div>
                <div class="Id-Exp-storage">
                    <div class="id-container">
                        <label>Id:</label>
                        <input type="text" class="update-input-id-field" value="${hourlyInfo.timedTask.id}">
                    </div>
                    <div class="exp-container">
                        <label>Exp:</label>
                        <input type="number" value="${hourlyInfo.timedTask.experiencePoints}">
                    </div>
                </div>
                <div class="updater-button-container">
                    <button class="confirm-update-button">Confirm</button>
                    <button class="cancel-update-button">Cancel</button>
                </div>
            </div>
        </div>
    `;

    const timeTableHTML = document.querySelector('.js-main-section-body').innerHTML;

    document.querySelector('.js-main-section-body').innerHTML += updateHTML;
    
    document.querySelector('.cancel-update-button').addEventListener('click', () => {
        document.querySelector('.js-main-section-body').innerHTML = timeTableHTML;
        updateTimedTasks();
    });



};