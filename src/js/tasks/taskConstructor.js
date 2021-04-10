import {formLocation} from "./showForm";
import * as htmlTag from "../html-tags";
import { chooseDate } from "./formatDate";

class Task {
    constructor(theTitle, dueDate) {
        this.id = new Date().getTime();
        this.title = theTitle;
        this.dueDate = dueDate;
        this.completed = false;
    }
    set completed(newValue) {
        this._completed = newValue;
    }

    getId() {
        return this.id;
    }

    get completed() {
        return this.completed;
    }

    set theTitle(newTitle) {
        this._title = newTitle;
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
}



export default Task;