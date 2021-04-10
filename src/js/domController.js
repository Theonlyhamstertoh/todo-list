import {showForm, addTaskButton, formLocation} from "./tasks/showForm";
import {addTask, taskArray, getTask, deleteTask, markCompleteTask, hideSection} from "./tasks/task";

const buttonHandler = (e) => {

    if(e.target.classList.contains("plus_add_button")) {
        if(showForm.getIsEditModeEnable()) {
            const previousObject = formLocation.get_Info().theElementObject;
            addTask.create(previousObject.theTitle, previousObject.date);
            showForm.updateIsEditModeEnable(false);
            showForm.remove();
        }
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
        if(showForm.getIsEditModeEnable()) {
            const previousObject = formLocation.get_Info().theElementObject;
            addTask.create(previousObject.theTitle, previousObject.date);
            showForm.updateIsEditModeEnable(false);
            showForm.remove();
        }

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

}
window.addEventListener('click', buttonHandler, false);









export {buttonHandler};



