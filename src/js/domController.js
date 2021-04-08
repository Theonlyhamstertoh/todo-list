import {showForm, addTaskButton} from "./tasks/showForm";
import {addTask, taskArray} from "./tasks/task";

const buttonHandler = (e) => {

    if(e.target.classList.contains("plus_add_button")) {
        if(showForm.getIsFormEnabled() === true) {
            showForm.remove();
        } 
        showForm.create(e.target.parentNode);
        addTaskButton.remove(e.target);
    }

    if(e.target.classList.contains('delete_icon')) {
        const itemToBeDeleted = e.target.parentNode.parentNode;
        const itemToBeDeleted_ID = parseInt(itemToBeDeleted.dataset.id);
        
        taskArray.forEach(el => {
            if(el._id === itemToBeDeleted_ID) {
                taskArray.splice(taskArray.indexOf(el), 1);
                itemToBeDeleted.remove();
                
        }
    })
        

    }
}
window.addEventListener('click', buttonHandler, false);

import { addDays, format, formatDistance, formatRelative, startOfDay, subDays } from 'date-fns'











export {buttonHandler};



