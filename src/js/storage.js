import {taskArray} from "./tasks/task"


const storage = (() => {
    const saveLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(taskArray))
    }

    return {saveLocal}
})();


export {storage};