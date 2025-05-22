import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { monthsOfTheYear } from './MonthsOfTheYears.js';
import { getMatchingDay } from './daysOfTheMonth.js';

const today = dayjs();
const thisDate = today.format('DD');
const monthJs = today.format('MM');

const monthStringJs = today.format('MMMM');
const year = today.format('YYYY');


const firstDay = dayjs(`${year}/${monthJs}/01`);
const daysCount = Number(today.format('D'));
const extraDays = Number(firstDay.format('d'));
const previousDays = daysCount + extraDays; 


export const thisMonth = [];

for (let i = 1; i < 43; i++) {
    // const element = array[i];
    const dateStringJs = today.add(-(previousDays-i),'days').format('DD');
    const monthNameJs = today.add(-(previousDays-i),'days').format('MMMM');
    monthsOfTheYear.forEach((monthObject) => {
        if(monthObject.monthName === monthNameJs){
            const dateObject = getMatchingDay(dateStringJs);
                dateObject.todaysHours.forEach(hourlyIfo => hourlyIfo.activeTime = hourlyIfo.startTime === dayjs().format('HH:00')? true:false)
            thisMonth.push({
                id: `${dateObject.id}-${monthObject.id}-${year}-year`,
                hoursObject: dateObject.todaysHours,
                dateString: today.add(-(previousDays-i),'days').format('DD'),
                dateNumber: Number(today.add(-(previousDays-i),'days').format('D')),
                dayString: today.add(-(previousDays-1),'days').format('dddd'),
                shortDayString: today.add(-(previousDays-1),'days').format('ddd'),
                monthString: today.add(-(previousDays-i),'days').format('MMMM'),
                monthNumberString: today.add(-(previousDays-i),'days').format('MM'),
                monthNumber: Number(today.add(-(previousDays-i),'days').format('MM')),
                yearString: today.add(-(previousDays-i),'days').format('YYYY'),
                yearNumber: Number(today.add(-(previousDays-i),'days').format('YYYY')),
                isMonthActive: monthObject.monthName === monthStringJs? true : false,
                isDateActive: dateObject.dateString === thisDate ? true : false,
                isUpdating: false,
                dailyEvents: dateObject.eventOfTheDay
            });
        };
    });
};

