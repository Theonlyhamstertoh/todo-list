import { getUnixTime } from "date-fns";
import * as htmlTag from "../html-tags";
import {showForm, formLocation, addTaskButton} from "./showForm";
import Task from "./taskConstructor";


// window.setTimeout(() => {addTask.create("michael", "today")
// addTask.create("michael", "today")
// addTask.create("michael", "today")
// addTask.create("michael", "today")
// addTask.create("michael", "today")
// addTask.create("michael", "today")
// addTask.create("michael", "today")
// })

const taskArray = [];
const addTask = (() => {

    const create = (task_title, date_input) => {
        // all the values needed to be added to create task
        // create task object
        const newTaskObject = new Task(task_title, date_input);
        taskArray.push(newTaskObject);
        createObject(newTaskObject.id, newTaskObject.title, newTaskObject.date);
    }


    return {
        create,
    }
})()
const editTask = (TheTaskObject) => {
    createObject(TheTaskObject.id, TheTaskObject.theTitle, TheTaskObject.date);
};

const createObject = (id, title, date) => {
    const form_wrapper = formLocation.get_Info().newForm;
    const dateSection = formLocation.get_Info().dateSection;
    

    const newTask = document.createElement('li');
    newTask.dataset.id = id;
    newTask.classList.add('task_list_item');

    const taskHTML = document.createRange()
        .createContextualFragment(
            htmlTag.task(
                title,
                date,
            ));

    //apending the class to webpage
    newTask.appendChild(taskHTML);
    dateSection.insertBefore(newTask, form_wrapper)
}


const deleteTask = (e) => {
    const neededElement = getTask(e);
    taskArray.splice(taskArray.indexOf(neededElement), 1);
    completedTasksArray.splice(completedTasksArray.indexOf(neededElement), 1);

    const itemToBeDeleted = e.target.parentNode.parentNode;
    itemToBeDeleted.remove();

    const completedTaskCount = document.querySelector('.total_completed_tasks');


    completedTaskCount.textContent = `(${completedTasksArray.length})`;

}
const getTask = (e) => {
    const itemToBeDeleted = e.target.parentNode.parentNode;
    const itemToBeDeleted_ID = parseInt(itemToBeDeleted.dataset.id);
    let neededElement = null; 
    taskArray.map(el => {
        if(el.id === itemToBeDeleted_ID) {
            return neededElement = el;

        }
    });

    completedTasksArray.map(el => {
        if(el.id === itemToBeDeleted_ID) {
            return neededElement = el;
        }
    })
    return neededElement;
}
const completedTasksArray = [];
const markCompleteTask = (e) => {
    const completedSection = document.querySelector('[data-date-list="completed"]')
    const completedTaskCount = document.querySelector('.total_completed_tasks');
    const completedItem = e.target.parentNode;

    taskArray.forEach(el => {
        if(el.id === Number(e.target.parentNode.dataset.id)) {
            completedTasksArray.push(el);
            el.completed = true;
            taskArray.splice(taskArray.indexOf(el), 1);
        }
    })
    completedTaskCount.textContent = `(${completedTasksArray.length})`;
    completedSection.appendChild(completedItem);

};

const hideSection = (e, condition) => {
    const completedList = e.target.parentNode.childNodes[3];
    if(condition === true) {
        completedList.style.display='none'
        
    } else if(condition === false){
        completedList.style.display='block'
    } 
}
const unmarkTask = (e) => {

}
const dragTask = (() => {

})()


export {addTask, taskArray, deleteTask, markCompleteTask, hideSection, getTask, editTask};