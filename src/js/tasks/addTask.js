import * as htmlTag from "../html-tags";
import {showForm} from "./showForm";
const addTask = (() => {
    const create_Task = (e) => {
        const form_wrapper = showForm.formLocation.get_Info().newForm;
        const dateSection = showForm.formLocation.get_Info().dateSection;
        const task_title = showForm.formLocation.get_Info().task_title;

        const newTask = document.createElement('li');
        newTask.classList.add('task_list_item');
        
        console.log(task_title.value)
        const taskHTML = document.createRange()
            .createContextualFragment(htmlTag.task(task_title.value));
    
        //apending the class to webpage
        newTask.appendChild(taskHTML);
        dateSection.insertBefore(newTask, form_wrapper)

        // clear the textbox for new tasks
        task_title.value = "";
        task_title.focus();
        showForm.disable_AddTaskButton();

    }

    const taskArray = [];
    class Task {
        constructor(title, dueDate = "No Date") {
            this.title = title;
            this.dueDate = dueDate; 
        }

        setTitle(newTitle) {
            this.title = newTitle;
        }

        getTitle() {
            return this.title;
        }

        setDate(newDueDate) {
            this.dueDate = newDueDate; 
        }

        getDate() {
            return this.dueDate;
        }


    }

    return {
        create_Task
    }
})()

export {addTask};