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
                    const title = task.querySelector('.item_title').textContent;
                    if(task.dataset.id === el.id && title.length > 30) {
                        console.log(title.length)
                        task.style.flexDirection = "column";
                        task.style.paddingRight = "30px";

                    }
                })
            }
        })
    } else {
        allTasks.forEach(task => {
            task.style.flexDirection = "row";
            task.style.paddingRight = "10px";
        })
    }
}
export {storage, changeLayout};