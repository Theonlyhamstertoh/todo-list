import {createObject, taskArray, count} from "./tasks/task"
import {showTask} from "./domController"
import Task from "./tasks/taskConstructor";

const storage = (() => {
    const saveLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(taskArray))
    }

    const restoreLocal = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks === null) return;
        for(let task of tasks) {
            const createTaskObject = new Task(task.title, task.dueDate, task.completed)
            createObject(createTaskObject.id ,createTaskObject.title, createTaskObject.dueDate, createTaskObject.completed);
            taskArray.push(createTaskObject);
            
            
        }
        count();
    }
    return {saveLocal, restoreLocal}
})();

window.addEventListener('load', storage.restoreLocal);

export {storage};