import { getUnixTime } from "date-fns";
import * as htmlTag from "../html-tags";
import {showForm, formLocation, addTaskButton} from "./showForm";
import Task from "./taskConstructor";
import {findCorrectSection} from "./formatDate"
import { storage } from "../storage";

window.setTimeout(() => {
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
    addTask.create("michael", "2021-04-11")
}, 100)

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
    const dateSection = findCorrectSection(date);
    let appendBeforeThisChild = dateSection.lastElementChild;
    if(showForm.getIsFormEnabled() && dateSection.querySelector('.form_wrapper') !== null) {
        appendBeforeThisChild = dateSection.querySelector('.form_wrapper');
    }

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
    if(showForm.getIsEditModeEnable()) {
    } else {
        dateSection.insertBefore(newTask, appendBeforeThisChild)
    }
    storage.saveLocal();
}


const deleteTask = (e) => {
    let neededElement = getTask(e);

    taskArray.splice(taskArray.indexOf(neededElement), 1);

    const itemToBeDeleted = e.target.parentNode.parentNode;
    itemToBeDeleted.remove();

    const completedTaskCount = document.querySelector('.total_completed_tasks');
    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.completedTask === true) {
            console.log(el)
            countOfCompleted++;
        }
    })

    completedTaskCount.textContent = `(${countOfCompleted})`;
    storage.saveLocal();

}
const getTask = (e, checkCompleted) => {
    let itemToBeDeleted = e.target.parentNode.parentNode;
    if(checkCompleted === true) {
       itemToBeDeleted = e.target.parentNode; 
    }
    const itemToBeDeleted_ID = itemToBeDeleted.dataset.id;
    let neededElement = null; 
    taskArray.map(el => {
        if(el.id === itemToBeDeleted_ID) {
            return neededElement = el;

        }
    });
    return neededElement;
}
let countOfCompleted = 0;
const markCompleteTask = (e) => {
    const completedSection = document.querySelector('[data-date-list="completed"]')
    const completedTaskCount = document.querySelector('.total_completed_tasks');
    const completedItem = e.target.parentNode;
    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.id === e.target.parentNode.dataset.id) {
            el.completed = true;
            countOfCompleted++;
        }
    })
    completedTaskCount.textContent = `(${countOfCompleted})`;
    completedSection.appendChild(completedItem);
    storage.saveLocal();

};

const unmarkCompleteTask = (e) => {

}

const hideSection = (e, condition) => {
    const completedList = e.target.parentNode.childNodes[3];
    if(condition === true) {
        completedList.style.display='none'
        
    } else if(condition === false){
        completedList.style.display='block'
    } 
}



export {addTask, taskArray, deleteTask, markCompleteTask, hideSection, getTask, editTask};