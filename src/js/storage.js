import {createObject, addTask, taskArray, count} from "./tasks/task"
import {showTask} from "./domController"
import Task from "./tasks/taskConstructor";

const storage = (() => {
    const saveLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(taskArray))
    }

    const restoreLocal = () => {
        window.addEventListener('resize', changeLayout)
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks === null) {
            return;

        };
        for(let task of tasks) {
            const createTaskObject = new Task(task.title, task.dueDate, task.completed)
            taskArray.push(createTaskObject);
            createObject(createTaskObject.id ,createTaskObject.title, createTaskObject.dueDate, createTaskObject.completed);
            
            
        }

        changeLayout();
        count();
    }
    return {saveLocal, restoreLocal}
})();

window.addEventListener('load', storage.restoreLocal);
;

const changeLayout = () => {
    const allTasks = document.querySelectorAll('.task_list_item');
    if(window.innerWidth < 700) {
        taskArray.forEach(el => {
            if(el.dueDate !== "") {
                allTasks.forEach(task => {
                    if(task.dataset.id === el.id) {
                        task.style.flexDirection = "column";
                    }
                })
            }
        })
    } else {
        allTasks.forEach(task => {
            task.style.flexDirection = "row";
        })
    }
}
export {storage, changeLayout};