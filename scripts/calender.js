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
import { thisMonth } from "../data/calendar-data/thisMonth42dayjs.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


document.querySelector('.js-calender-header').innerHTML = generateHeader();

const url = new URL(window.location.href);
const loadUrlParams = url.searchParams.get('loadDailySch');
const dateIdUrlParams = url.searchParams.get('dateId');



function generateDailyTimeTable(){
    const calenderBodySection = document.querySelector('.js-main-section-body');
    // let selectedDate;
    let dailyTableHTML = '';

    thisMonth.forEach((selectDate) => {
        if(selectDate.id === dateIdUrlParams){
            // selectedDate = structuredClone(dateObject);

            dailyTableHTML = `
                <button class="back-to-calender js-back-to-calender">Back</button>
                <div class="daily-schedule-table">
                    <div class="daily-header-display">
                        <div>Time Table</div>
                        <div>
                            <span>${selectDate.shortDayString} - ${selectDate.dateString}/${selectDate.monthNumberString}/${selectDate.yearString}</span>
                        </div>
                    </div>
                    <div class="daily-body-display">
                        ${generateHourlySchedule(selectDate)}
                    </div>
                </div>
            `;
        };
    });

    // dailyTableHTML = `
    // <button class="back-to-calender js-back-to-calender">Back</button>
    // <div class="daily-schedule-table">
    //     <div class="daily-header-display">
    //         <div>Time Table</div>
    //         <div>
    //             <span>${selectedDate.shortDayString} - ${selectedDate.dateString}/${selectedDate.monthNumberString}/${selectedDate.yearString}</span>
    //         </div>
    //     </div>
    //     <div class="daily-body-display">
    //         ${generateHourlySchedule(selectedDate)}
    //     </div>
    // </div>
    // `;



    function generateHourlySchedule(selectDate) {
        // const timeTableBody = document.querySelector('.daily-body-display');
        
        const hourlyInfoObject = selectDate.hoursObject;
        let timeTableHTML = '';

        hourlyInfoObject.forEach((hourlyInfo) => {
            if(hourlyInfo.timedTask.titleText === ''){
                hourlyInfo.timedTask.titleText = '- - -';
            }
    
            timeTableHTML += `
                <div class="time-table-hours"
                    style="
                        background-color: ${selectDate.isDateActive && hourlyInfo.activeTime? '#b7bdbf': '#d5d2d2'};
                    "
                >
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

        /*hoursOfTheDays.forEach((hourlyInfo) => {
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
        });*/
        /*dailyTableHTML = `
            <button class="back-to-calender js-back-to-calender">Back</button>
            <div class="daily-schedule-table">
                <div class="daily-header-display">
                    <div>Time Table</div>
                    <div>
                        <span>${dayjs().format('ddd - DD/MM/YYYY')}</span>
                    </div>
                </div>
                <div class="daily-body-display">
                    ${generateHourlySchedule()}
                </div>
            </div>
        `;*/
    
        // timeTableBody.innerHTML = timeTableHTML;
        return timeTableHTML;
    
    };

    function controlEventUpdate(){

        thisMonth.forEach((selectDate) => {
            if(selectDate.id === dateIdUrlParams){
                const hourlyInfoObject = selectDate.hoursObject;

                hourlyInfoObject.forEach((hourlyInfo) => {
                    document.querySelector(`.js-hour-update-button-${hourlyInfo.id}`).addEventListener('click', () => {
                        const timeTableHTML = document.querySelector('.js-main-section-body');                
                        let updateHTML = '';
                
                        updateHTML = `
                            <div class="info-update-container">
                                <div class="info-update-card">
                                    <div class="update-card-header">
                                        <span>Enter new task and confirm</span>
                                        <span>⚙️</span>
                                    </div>
                                    <div class="title-input-container">
                                        <label>Task Title:</label>
                                        <input type="text" class="update-title-input js-update-title-input" value="${hourlyInfo.timedTask.titleText}">
                                    </div>
                                    <div class="description-container">
                                        <label>Task Description:</label>
                                        <input class="update-description-input js-update-description-input" value="${hourlyInfo.timedTask.descriptiveText}">
                                    </div>
                                    <div class="Id-Exp-storage">
                                        <div class="id-container">
                                            <label>Id:</label>
                                            <input type="text" class="update-id-input js-update-id-input" value="${hourlyInfo.timedTask.id}">
                                        </div>
                                        <div class="exp-container">
                                            <label>Exp:</label>
                                            <input type="number" class="update-exp-input js-update-exp-input" value="${hourlyInfo.timedTask.experiencePoints}">
                                        </div>
                                    </div>
                                    <div class="update-button-container">
                                        <button class="confirm-update-button">Confirm</button>
                                        <button class="cancel-update-button">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        `;

                        timeTableHTML.innerHTML = updateHTML;

                        document.querySelector(`.cancel-update-button`).addEventListener('click', () => {
                            generateDailyTimeTable();
                        });

                        document.querySelector(`.confirm-update-button`).addEventListener('click', () => {
                            const textInput = document.querySelector(`.js-update-title-input`);
                            const descriptionInput = document.querySelector('.js-update-description-input');
                            const idInput = document.querySelector('.js-update-id-input');
                            const expInput = document.querySelector('.js-update-exp-input');

                            hourlyInfo.timedTask.titleText = textInput.value;
                            hourlyInfo.timedTask.descriptiveText = descriptionInput.value;
                            hourlyInfo.timedTask.id = idInput.value;
                            hourlyInfo.timedTask.experiencePoints = expInput.value;

                            localStorage.setItem('thisMonth', JSON.stringify(thisMonth));
                        });
                    });
                });
            };
        });
    };
    


    /*function controlUpdateGeneration(hourlyInfo){
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
            // updateTimedTasks();
        });
    
    };*/
    
    calenderBodySection.innerHTML =  dailyTableHTML;
    console.log(thisMonth);
    controlEventUpdate();
};

function generatesTaskCalender(){
    let calenderHTML = '';

    calenderHTML+=`
        <div class="task-calender">
            <div class="calender-header">
                <!-- Generate Code -->
                <div class="calender-date">${dayjs().format('YYYY MMMM DD')}</div>
                <div class="control-buttons-container">
                    <button class="previous-month-button">L</button>
                    <button class="next-month-button">R</button>
                </div>
            </div>
            <div class="calender-body">
                <div class="days-of-the-week">
                    <span class="sunday-column">Sun</span>
                    <span class="monday-column">Mon</span>
                    <span class="tuesday-column">Tues</span>
                    <span class="wednesday-column">Wed</span>
                    <span class="thursday-column">Thur</span>
                    <span class="friday-column">Fri</span>
                    <span class="saturday-column">Sat</span>
                </div>
                <div class="date-card-container js-date-card-container">
                    ${generateDateCards()}
                </div>
            </div>
        </div>
    `

    function generateDateCards() {
        /*This is the improved version(cleaner code) Gemini sourced*/
        let cardHTML = '';
        const gridPosition = {
            index: 0,
            columnStart: 1,
            columnEnd: 2,
            rowStart: 1,
            rowEnd: 2
        };

        thisMonth.forEach((date) => {

            cardHTML += `
                <div class="date-cards js-date-card-${date.id}"
                    style="
                        grid-column: ${gridPosition.columnStart}/${gridPosition.columnEnd};
                        grid-row: ${gridPosition.rowStart}/${gridPosition.rowEnd};
                        opacity: ${date.isMonthActive? '100%':'50%'};
                        background-color: ${date.isDateActive? '#b7bdbf': '#d5d2d2'};
                    "
                >
                    <div class="date-number">${date.dateString}</div>
                    <div class="date-text">${date.dailyEvents}</div>
                </div>
            `;

            if ((gridPosition.index + 1) % 7 === 0) {
                gridPosition.rowStart += 2;
                gridPosition.rowEnd += 2;
                gridPosition.columnStart = 1;
                gridPosition.columnEnd = 2;
            } else {
                gridPosition.columnStart += 2;
                gridPosition.columnEnd += 2;
            }

            gridPosition.index += 1;

            /*if(gridPosition.index < 5){
                console.log(date);
                console.log(thisMonth.length)
            }*/
        });

        /*for (let i = 0; i < 42; i++) {
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
        }*/

        return cardHTML;
    };

    document.querySelector('.js-main-section-body').innerHTML = calenderHTML;
};

function toggleCalenderSchedule(){

    if(loadUrlParams){
        generateDailyTimeTable();
        document.querySelector('.js-back-to-calender').addEventListener('click', () => {
            window.location.href = 'calender.html';
        });
    }else{
        generatesTaskCalender();
        thisMonth.forEach((date) => {
            document.querySelector(`.js-date-card-${date.id}`).addEventListener('dblclick', () => {
            window.location.href = `calender.html?dateId=${date.id}&loadDailySch=${true}`;
        });
    });
    }


};

toggleCalenderSchedule();



function controlEventUpdate(){

    thisMonth.forEach((selectDate) => {
        const hourlyInfoObject = selectDate.hoursObject
        if(selectDate.id === dateIdUrlParams){
            hourlyInfoObject.forEach((hourlyInfo) => {
                document.querySelector(`.js-hour-update-button-${hourlyInfo.id}`).addEventListener('click', () => {
                    const timeTableHTML = document.querySelector('.js-main-section-body');
                    let updateHTML = '';
            
                    updateHTML = `
                        <div class="info-update-container">
                            <div class="info-update-card">
                                <div class="update-card-header">
                                    <span>Enter new task and confirm</span>
                                    <span>⚙️</span>
                                </div>
                                <div class="title-input-container">
                                    <label>Task Title:</label>
                                    <input type="text" class="update-title-input js-update-title-input-${selectDate.id}" value="${hourlyInfo.timedTask.titleText}">
                                </div>
                                <div class="description-container">
                                    <label>Task Description:</label>
                                    <input class="update-description-input js-update-description-input" value="${hourlyInfo.timedTask.descriptiveText}">
                                </div>
                                <div class="Id-Exp-storage">
                                    <div class="id-container">
                                        <label>Id:</label>
                                        <input type="text" class="update-id-input js-update-id-input" value="${hourlyInfo.timedTask.id}">
                                    </div>
                                    <div class="exp-container">
                                        <label>Exp:</label>
                                        <input type="number" class="update-exp-input js-update-exp-input" value="${hourlyInfo.timedTask.experiencePoints}">
                                    </div>
                                </div>
                                <div class="update-button-container">
                                    <button class="confirm-update-button">Confirm</button>
                                    <button class="cancel-update-button">Cancel</button>
                                </div>
                            </div>
                        </div>
                    `;

                    timeTableHTML.innerHTML=updateHTML;

                    document.querySelector(`.cancel-update-button`).addEventListener('click', () => {
                        generateDailyTimeTable();    
                    });

                    document.querySelector(`.confirm-update-button`).addEventListener('click', () => {
                        const textInput = document.querySelector(`.js-update-title-input-${selectDate.id}`);
                        const descriptionInput = document.querySelector('.js-update-description-input');
                        const idInput = document.querySelector('.js-update-id-input');
                        const expInput = document.querySelector('.js-update-exp-input');
                        console.log(hourlyInfo.timedTask);
                        console.log(`.js-update-title-input-${selectDate.id}`===`.js-update-title-input-${dateIdUrlParams}`)
                        hourlyInfo.timedTask.titleText = textInput.value;
                        hourlyInfo.timedTask.descriptiveText = descriptionInput.value;
                        hourlyInfo.timedTask.id = idInput.value;
                        hourlyInfo.timedTask.experiencePoints = expInput.value;
                        console.log(hourlyInfo.timedTask);
                        console.log(thisMonth);
                        // localStorage.setItem('thisMonth', JSON.stringify(thisMonth));
                        // console.log(JSON.parse(localStorage.getItem('thisMonth')));
                    });
                    
                });
            });
        };
    });
}

// controlEventUpdate();



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
