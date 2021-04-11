import { addDays, format, isToday, toDate, formatDistance, formatRelative, parse, startOfDay, subDays, isThisWeek, isThisYear, differenceInYears, differenceInCalendarDays, isTomorrow, isThisMonth, isPast } from 'date-fns';
import {taskArray, addTask} from "./task";
import {showForm} from "./showForm";
const chooseDate = (date) => {
    if(date === "" || date === 'No Date' || date === undefined) return "";
    const chosenDate = date.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day);

    const CurrentDate = new Date();
    //  if date equals to yesterday, or two days ago, say that. Say three days, four days ago. 

    if(isPast(reformattedDate)) {
        const overdue = formatDistance(reformattedDate, CurrentDate, {addSuffix: true})
        return overdue; 
    } else if(isToday(reformattedDate)) {
        return "Today";
    } else if(isThisWeek(reformattedDate, { weekStartsOn: 1 })) {
        const within_week = format(new Date(year, month, day), "EEEE");
        return within_week
    } else if(isThisYear(reformattedDate)) {
        const within_year = format(new Date(year, month, day), "MMMM do");
        return within_year;
    } else if(differenceInYears(reformattedDate, CurrentDate) >= 1) {
        const beyond_year = format(new Date(year, month, day), "MMMM do yyyy");
        return beyond_year;
    }
};


const findCorrectSection = (date) => {
    if(date === "" || date === undefined || date === 'No Date') {
        const noDate = document.querySelector('[data-date-list="noDate"]')
        return noDate;
    } 
    const chosenDate = date.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day, 23, 59, 59);
    const CurrentDate = new Date();
    if(isPast(reformattedDate)) {
        const overdue = document.querySelector('[data-date-list="overdue"]')
        return overdue;
    } else if(isToday(reformattedDate)) {
        const today = document.querySelector('[data-date-list="today"]')
        return today;
    } else if(isTomorrow(reformattedDate)) {
        const tomorrow = document.querySelector('[data-date-list="tomorrow"]')
        return tomorrow;
    } else if(isThisWeek(reformattedDate, { weekStartsOn: 1 })) {
        const week = document.querySelector('[data-date-list="week"]')
        return week;
    } else if(isThisMonth(reformattedDate)) {
        const month = document.querySelector('[data-date-list="month"]')
        return month;
    } else if(!isThisMonth(reformattedDate) && !isPast(reformattedDate)) {
        const someday = document.querySelector('[data-date-list="someday"]');
        console.log(someday)
        return someday;
    } 
}


export {chooseDate, findCorrectSection};

