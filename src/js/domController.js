import {showForm, addTaskButton, formLocation} from "./tasks/showForm";
import {addTask, taskArray, editTask, getTask, deleteTask, markCompleteTask, hideSection} from "./tasks/task";
import {storage} from "./storage"
import {sort} from "./tasks/sort";
const buttonHandler = (e) => {
    const showTask = () => {
        if(showForm.getIsEditModeEnable()) {
            const previousObject = formLocation.get_Info().theElementObject;

            addTask.create(previousObject.theTitle, previousObject.date);
            showForm.updateIsEditModeEnable(false);
            showForm.remove();
        }
    }
    if(e.target.classList.contains("plus_add_button")) {

        showTask();
        if(showForm.getIsFormEnabled() === true) {
            showForm.remove();
            addTaskButton.create(formLocation.get_Info().dateSection);
        }
        showForm.create(e.target.parentNode);
        addTaskButton.remove(e.target);
    }

    if(e.target.classList.contains('delete_icon')) {
        deleteTask(e);
    }

    if(e.target.classList.contains('edit_icon')) {
        const theElementObject = getTask(e); 
        const theElement = e.target.parentNode.parentNode;
        const dateSection = e.target.parentNode.parentNode.parentNode;

        showTask();

        if(dateSection.querySelector('.plus_add_button') === null) {
            addTaskButton.create(dateSection);
        }

        if(showForm.getIsFormEnabled() === true) {
            showForm.remove();

        } 


        showForm.updateIsEditModeEnable(true);
        showForm.create(dateSection, theElement, theElementObject);
        theElement.remove();
    }
    if(e.target.classList.contains('task-heading')) {
        const dateSection = e.target.nextElementSibling;
        showForm.updateIsEditModeEnable(false);
        showForm.remove();
        if(dateSection.querySelector('.plus_add_button') === null && dateSection.dataset.dateList !== "completed") {
            addTaskButton.create(dateSection);
        }

        const showIcon = e.target.querySelector('.show_completed_task_icon');
        if(showIcon.style.transform === "rotate(90deg)") {
            showIcon.style.transform = 'rotate(270deg)';
            showIcon.style.right = '3px';
            hideSection(e, false);
        } else {
            showIcon.style.transform = "rotate(90deg)";
            showIcon.style.right = '-5px';
            hideSection(e, true);
        }
    }
    if(e.target.classList.contains('item_check')) {
        if(e.target.childNodes[0].style.display === 'block') {
            e.target.style.backgroundColor = '';
            e.target.childNodes[0].style.display = 'none';
            e.target.nextElementSibling.style.textDecoration = 'none';
        }
        e.target.style.backgroundColor = 'rgba(168, 83, 83, 0.5)';
        e.target.childNodes[0].style.display = 'block';
        e.target.nextElementSibling.style.textDecoration = 'line-through';

        const theElementObject = getTask(e, true); 
        const theElement = e.target.parentNode;
        const editButton = theElement.childNodes[5].childNodes[3];
        editButton.style.pointerEvents = "none";
        if(theElementObject.completedTask === true) {
            theElementObject.completedTask = false;
            editTask(theElementObject);
            theElement.remove();

        } else {
            markCompleteTask(e);
        }
        
    }

    if(e.target.classList.contains('list-sort')) {
        e.target.textContent = changeSortType(e);
  

    }
}

const changeSortType = (e) => {
    const allSections = document.querySelectorAll("[data-date]")
     
    allSections.forEach(el => {
        el.style.display = 'none'
    })

    switch(e.target.textContent) {
        case "Show All": 
            const overdue = document.querySelector('[data-date="overdue"]')
            overdue.style.display = 'block'
            return 'Show Overdue';
        case "Show Overdue":
            const today = document.querySelector('[data-date="today"]')
            today.style.display = 'block'
            return 'Show Today';
        case "Show Today":
            const tomorrow = document.querySelector('[data-date="tomorrow"]')
            tomorrow.style.display = 'block'

            return 'Show Tomorrow';
        case "Show Tomorrow":
            const week = document.querySelector('[data-date="week"]')
            week.style.display = 'block'
            return 'Show This Week'
        case "Show This Week":
            const month = document.querySelector('[data-date="month"]')
            month.style.display = 'block'

            return 'Show This Month'
        case "Show This Month":
            const someday = document.querySelector('[data-date="someday"]')
            someday.style.display = 'block'
            return 'Show Someday'
        case "Show Someday":
            const completed = document.querySelector('[data-date="completed"]')
            completed.style.display = 'block';
            return 'Show Completed'
        default: 
        allSections.forEach(el => {
            el.style.display = 'block'
        }) 
           return 'Show All'
    }
}
window.addEventListener('click', buttonHandler, false);









export {buttonHandler};



