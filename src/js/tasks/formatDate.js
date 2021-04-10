import { addDays, format, isToday, toDate, formatDistance, formatRelative, parse, startOfDay, subDays, isThisWeek, isThisYear, differenceInYears } from 'date-fns'
import {taskArray, addTask} from "./task"

const chooseDate = (date) => {
    if(date === "" || date === 'No Date') return "";
    const chosenDate = date.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day);

    const CurrentDate = new Date();

    if(isToday(reformattedDate)) {
        return "Today";
    }
    if(isThisWeek(reformattedDate, { weekStartsOn: 1 })) {
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


window.addEventListener('load', (e) => {
    const CurrentDate = new Date();
    const dateSection = document.querySelector('[data-date="today"]')
    console.log(dateSection)
    taskArray.forEach(el => {
        console.log(el)
        (chooseDate(el.date));
    })
})

export {chooseDate};

