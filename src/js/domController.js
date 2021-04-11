import {showForm, addTaskButton, formLocation} from "./tasks/showForm";
import {addTask, taskArray, getTask, deleteTask, markCompleteTask, hideSection} from "./tasks/task";

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
        showTask();


        const theElementObject = getTask(e); 
        const theElement = e.target.parentNode.parentNode;
        const dateSection = e.target.parentNode.parentNode.parentNode;

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
        console.log(dateSection)
        showForm.updateIsEditModeEnable(false);
        showForm.remove();
        if(dateSection.querySelector('.plus_add_button') === null) {
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
            return;
        }
        e.target.style.backgroundColor = 'rgba(168, 83, 83, 0.5)';
        e.target.childNodes[0].style.display = 'block';
        e.target.nextElementSibling.style.textDecoration = 'line-through';


     
        markCompleteTask(e);
    }

    if(e.target.classList.contains('list-sort')) {
        switch(e.target.textContent) {
            case "Show All": 
                e.target.textContent = 'Show Overdue';
                break;
            case "Show Overdue":
                e.target.textContent = 'Show Today';
                break;
            case "Show Today":
                e.target.textContent = 'Show Tomorrow';
                break;
            case "Show Tomorrow":
                e.target.textContent = 'Show This Week'
                break;
            case "Show This Week":
                e.target.textContent = 'Show This Month'
                break;
            case "Show This Month":
                e.target.textContent = 'Show Someday'
                break;
            case "Show Someday":
                e.target.textContent = 'Show Completed'
                break;
            default: 
               e.target.textContent = 'Show All'
                break;
        }
    }
}
window.addEventListener('click', buttonHandler, false);









export {buttonHandler};



