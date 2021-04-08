import * as htmlTag from "../html-tags";
import {showForm, formLocation, addTaskButton} from "./showForm";
import Task from "./taskConstructor";

const taskArray = [];
const addTask = (() => {
    
    const create = () => {
        // all the values needed to be added to create task
        const task_title = formLocation.get_Info().task_title;
        const task_dueDate = formLocation.get_Info().task_dueDate;
        const task_importance = formLocation.get_Info().task_importance;
        const task_color = formLocation.get_Info().task_color;

        // create task object
        const newTaskObject = new Task(task_title.value, task_dueDate.value, task_importance.value);
        taskArray.push(newTaskObject);
        newTaskObject.createObject();

        // clear the textbox for new tasks
        task_title.value = "";
        task_title.focus();
        addTaskButton.disable();

        // add event listener to the edit button

    }

    return {
        create,
    }
})()

const editTask = (() => {


})();
const deleteTask = (() => {


})();
const markCompleteTask = (() => {


})();

const dragTask = (() => {

})()


export {addTask, taskArray};