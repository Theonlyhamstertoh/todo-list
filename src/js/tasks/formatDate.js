import { addDays, format, isToday, toDate, formatDistance, formatRelative, parse, startOfDay, subDays, isThisWeek, isThisYear, differenceInYears } from 'date-fns'

const chooseDate = () => {
    const CurrentDate = new Date();
    const date_value = document.querySelector('.date_value');
    const dateInput = document.querySelector('.datepicker-input');
    const chosenDate = dateInput.value.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day);

    updateFormDate(date_value, year, month, day, reformattedDate, CurrentDate);
    
};

const updateFormDate = (date_value, year, month, day, reformattedDate, CurrentDate) => {
    if(isThisWeek(reformattedDate, { weekStartsOn: 1 })) {
        const within_week = format(new Date(year, month, day), "EEEE")
        date_value.textContent = within_week;
    } else if(isThisYear(reformattedDate)) {
        const within_year = format(new Date(year, month, day), "MMMM do");
        date_value.textContent = within_year;
    } else if(differenceInYears(reformattedDate, CurrentDate) >= 1) {
        const beyond_year = format(new Date(year, month, day), "MMMM do yyyy");
        date_value.textContent = beyond_year;
    }
}

export {chooseDate};

