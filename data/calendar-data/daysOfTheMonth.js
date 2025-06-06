/* 
    TO-DO-List
        -Remember to display the event section as greyed out when there are no important events
*/


import { hoursOfTheDays } from "./hoursOfTheDay.js";

export const daysOfTheMonth = [
    {
        id: '01-first-date',
        dateString: '01',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '02-second-date',
        dateString: '02',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '03-third-date',
        dateString: '03',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '04-fouth-date',
        dateString: '04',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '05-fifth-date',
        dateString: '05',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '06-sixth-date',
        dateString: '06',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '07-seventh-date',
        dateString: '07',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '08-eighth-date',
        dateString: '08',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '09-ninth-date',
        dateString: '09',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '10-tenth-date',
        dateString: '10',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '11-eleventh-date',
        dateString: '11',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '12-twelveth-date',
        dateString: '12',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '13-thirteen-date',
        dateString: '13',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '14-fourteenth-date',
        dateString: '14',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '15-fifth-date',
        dateString: '15',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '16-sixteenth-date',
        dateString: '16',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '17-seventh-date',
        dateString: '17',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '18-eighthteen-date',
        dateString: '18',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '19-ninthteen-date',
        dateString: '19',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '20-twentieth-date',
        dateString: '20',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '21-twentyfirst-date',
        dateString: '21',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '22-twentysecond-date',
        dateString: '22',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '23-twentythird-date',
        dateString: '23',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '24-twentyfourth-date',
        dateString: '24',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '25-twentyfifth-date',
        dateString: '25',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '26-twentysixth-date',
        dateString: '26',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '27-twentyseventh-date',
        dateString: '27',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '28-twentyeighth-date',
        dateString: '28',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '29-twentyninth-date',
        dateString: '29',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '30-thirtieth-date',
        dateString: '30',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
    {
        id: '31-thirtyfirst-date',
        dateString: '31',
        todaysHours: structuredClone(hoursOfTheDays),
        eventOfTheDay: 'No Events'
    },
];

export function getMatchingDay(dateStringJs){
    let matchingDay; 

    daysOfTheMonth.forEach((date) => {
        if( date.dateString === dateStringJs){
            matchingDay = structuredClone(date);
        }
    });

    return matchingDay;
};