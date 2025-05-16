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
import "../data/thisMonth42dayjs.js"


document.querySelector('.js-calender-header').innerHTML = generateHeader();

function generateDailyTimeTable(){

    const calenderBodySection = document.querySelector('.js-main-section-body');
    let dailyTableHTML = '';

    dailyTableHTML = `
        <div class="daily-schedule-table">
            <div class="daily-header-display">
                <div>Time Table</div>
                <div>
                    <span>Sat - 29/03/2025</span>
                </div>
            </div>
            <div class="daily-body-display">
                ${generateHourlySchedule()}
            </div>
        </div>
    `;

    function generateHourlySchedule() {
        // const timeTableBody = document.querySelector('.daily-body-display');
    
        let timeTableHTML = '';
    
        hoursOfTheDays.forEach((hourlyInfo) => {
            if(hourlyInfo.timedTask.titleText === ''){
                hourlyInfo.timedTask.titleText = '- - -';
            }
    
            timeTableHTML += `
                <div class="time-table-hours">
                    <div class="hourly-task-texts js-hour-task-text-${hourlyInfo.id}">${hourlyInfo.timedTask.titleText}</div>
                    <div class="hours-body-display">
                        <div class="js-hour-time-display">${hourlyInfo.startTime} - ${hourlyInfo.endTime}</div>
                        <div class="hours-button-container">
                            <button class="hours-update-button js-hour-update-button-${hourlyInfo.id}">Update</button>
                            <button class="hours-clear-button js-hour-clear-button">Clear</button>
                        </div>
                    </div>
                </div>
            `;
        });
    
        // timeTableBody.innerHTML = timeTableHTML;
        return timeTableHTML;
    
    };
    
    function updateTimedTasks(){
        hoursOfTheDays.forEach((hourlyInfo) => {
            document.querySelector(`.js-hour-update-button-${hourlyInfo.id}`).addEventListener('click',() => {
                // hourlyInfo.timedTask.titleText = "Not Sleeping";
                // console.log(hourlyInfo.timedTask.titleText);
                // document.querySelector(`.js-hour-task-text-${hourlyInfo.id}`).innerHTML = hourlyInfo.timedTask.titleText;
                controlUpdateGeneration(hourlyInfo);
            });
        });
    };
    
    function controlUpdateGeneration(hourlyInfo){
        const updateHTML = `
            <div class="info-update-container">
                <div class="info-update-card">
                    <div class="update-card-header">
                        <span>Enter new task and confirm</span>
                        <span>⚙️</span>
                    </div>
                    <div class="title-input-container">
                        <label>Task Title:</label>
                        <input type="text" class="update-title-input" value="${hourlyInfo.timedTask.titleText}">
                    </div>
                    <div class="description-container">
                        <label>Task Description:</label>
                        <input class="update-description-input" value="${hourlyInfo.timedTask.descriptiveText}">
                    </div>
                    <div class="Id-Exp-storage">
                        <div class="id-container">
                            <label>Id:</label>
                            <input type="text" class="update-id-input" value="${hourlyInfo.timedTask.id}">
                        </div>
                        <div class="exp-container">
                            <label>Exp:</label>
                            <input type="number" class="update-exp-input" value="${hourlyInfo.timedTask.experiencePoints}">
                        </div>
                    </div>
                    <div class="update-button-container">
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

    updateTimedTasks();
    
    calenderBodySection.innerHTML =  dailyTableHTML;
};

// generateDailyTimeTable();

document.querySelector('.js-date-card-container').innerHTML = generateDateCards();

function generateDateCards() {
    /*This is the improved version(cleaner code) Gemini sourced*/
    let cardHTML = '';
    const gridPosition = {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 1,
        rowEnd: 2
    };

    for (let i = 0; i < 35; i++) {
        cardHTML += `
            <div class="date-cards"
                 style="
                     grid-column: ${gridPosition.columnStart}/${gridPosition.columnEnd};
                     grid-row: ${gridPosition.rowStart}/${gridPosition.rowEnd};
                 "
            >
                <span class="date-number"></span>
                <div class="text"></div>
            </div>
        `;

        if ((i + 1) % 7 === 0) {
            gridPosition.rowStart += 2;
            gridPosition.rowEnd += 2;
            gridPosition.columnStart = 1;
            gridPosition.columnEnd = 2;
        } else {
            gridPosition.columnStart += 2;
            gridPosition.columnEnd += 2;
        }
    }

    return cardHTML;
}

/*Version 1 base code (No assistant)*/
/*function generateDateCards(){
    let cardHTML = '';
    let columnStart = 1; 
    let columnEnd = 2;
    let row = 1; 
    let rowStart = 1;
    let rowEnd = 2;

    const gridPosition = {
        row: 1,
        columnStart: 1,
        columnEnd: 2,
        rowStart: 1,
        rowEnd: 2
    };

    for (let i = 0; i < 35; i++) {   
        cardHTML += `
                    <div class="date-cards"
                        style="    
                            grid-column: ${gridPosition.columnStart}/${gridPosition.columnEnd};
                            grid-row: ${gridPosition.rowStart}/${gridPosition.rowEnd};
                        "
                    >
                        <span class="date-number"></span>
                        <div class="text"></div>
                    </div>
        `;

        if(gridPosition.columnStart < 13 && gridPosition.columnEnd < 14){
            gridPosition.columnStart+=2;
            gridPosition.columnEnd+=2;
        }else{
            gridPosition.columnStart = 1;
            gridPosition.columnEnd =2;
        };

        if(i+1 === 7*gridPosition.row){
            gridPosition.row+=1
            gridPosition.rowStart+=2;
            gridPosition.rowEnd+=2;
        }
        
    }

    return cardHTML;
}*/
