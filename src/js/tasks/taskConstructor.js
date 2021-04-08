import {formLocation} from "./showForm";
import * as htmlTag from "../html-tags";

class Task {
    constructor(title, dueDate='No Date', importance='none') {
        this._id = new Date().getTime();
        this._title = title;
        this._dueDate = dueDate; 
        this._importance = importance;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    set date(newDueDate) {
        this._dueDate = newDueDate; 
    }

    get date() {
        return this._dueDate;
    }

    get importance() {
        return this._importance;
      }

    set importance(value) {
        if (value) {
            this._importance = value;
        }
    }

    createObject() {
        const form_wrapper = formLocation.get_Info().newForm;
        const dateSection = formLocation.get_Info().dateSection;
        
        const newTask = document.createElement('li');
        newTask.dataset.id = this._id;
        newTask.classList.add('task_list_item');

        const taskHTML = document.createRange()
            .createContextualFragment(
                htmlTag.task(
                    this._title, this._dueDate
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