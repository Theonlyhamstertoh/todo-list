import {formLocation} from "./showForm";
import * as htmlTag from "../html-tags";

class Task {
    constructor(theTitle, dueDate='No Date') {
        this.id = new Date().getTime();
        this.title = theTitle;
    }

    set theTitle(newTitle) {
        this.title = newTitle;
    }

    get theTitle() {
        return this.title;
    }

    set date(newDueDate) {
        this.dueDate = newDueDate; 
    }

    get date() {
        return this.dueDate;
    }

    get importance() {
        return this.importance;
      }

    set importance(value) {
        if (value) {
            this.importance = value;
        }
    }

    createObject() {
        const form_wrapper = formLocation.get_Info().newForm;
        const dateSection = formLocation.get_Info().dateSection;
        
        const newTask = document.createElement('li');
        newTask.dataset.id = this.id;
        newTask.classList.add('task_list_item');

        const taskHTML = document.createRange()
            .createContextualFragment(
                htmlTag.task(
                    this.title
                ));
    
        //apending the class to webpage
        newTask.appendChild(taskHTML);
        dateSection.insertBefore(newTask, form_wrapper)
    }

    editObject() {

    }


}

function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default Task;