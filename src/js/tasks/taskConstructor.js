import {formLocation} from "./showForm";
import * as htmlTag from "../html-tags";
import { chooseDate } from "./formatDate";

class Task {
    constructor(theTitle, dueDate) {
        this.id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        this.title = theTitle;
        this.dueDate = dueDate;
        this.completed = false;
    }
    set completedTask(newValue) {
        this.completed = newValue;
    }

    getId() {
        return this.id;
    }

    get completedTask() {
        return this.completed;
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
}



export default Task;