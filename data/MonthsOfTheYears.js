/* 
    TO-DO-List 
        -finish filling in all info ex.(like 07-Sep-month and amountOfDays)

        -remember to display the date and not keep track of it 
        -create a skip or early end for the forEach loop using
            amountOfDays if( dateLoopCount > amountOfDays){
                return;
            }else{
                run regular code!!!
            }
            
*/

import { daysOfTheMonth } from "./daysOfTheMonth.js";

export const monthsOfTheYear = [
    {
        id:'01-Jan-month',
        monthName: 'January',
        monthNumber: '01',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'02-Feb-month',
        monthName: 'February',
        monthNumber: '01',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 28
    },
    {
        id:'03-Mar-month',
        monthName: 'March',
        monthNumber: '03',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'04-Apr-month',
        monthName: 'April',
        monthNumber: '01',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 30
    },
    {
        id:'05-May-month',
        monthName: 'May',
        monthNumber: '05',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'06-Jun-month',
        monthName: 'June',
        monthNumber: '06',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'07-Jul-month',
        monthName: 'July',
        monthNumber: '07',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'08-Aug-month',
        monthName: 'August',
        monthNumber: '08',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'09-Sep-month',
        monthName: 'Septemeber',
        monthNumber: '09',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 30
    },
    {
        id:'10-Oct-month',
        monthName: 'October',
        monthNumber: '10',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    },
    {
        id:'11-Nov-month',
        monthName: 'November',
        monthNumber: '11',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 30
    },
    {
        id:'12-Dec-month',
        monthName: 'December',
        monthNumber: '12',
        datesObject: daysOfTheMonth,
        isActive: false,
        isUpdating: false,
        amountOfDays: 31
    }
]