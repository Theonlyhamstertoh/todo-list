import {showForm} from "./tasks/showForm";
import {addTask} from "./tasks/addTask";
// will be added to the task list js file
const detectClickOnAddTask = (() =>  {    
    const buttonHandler = (e) => {
        if(e.target.classList.contains("plus_add_button")) {
            if(showForm.getIsFormEnabled() === true) {
                showForm.remove_Form();
            } 
            showForm.create_Form(e.target.parentNode);
            showForm.removeAddTaskButton(e.target);
        }
    }
    // add eventlistener to listen for click on add_task
    const list_container = document.querySelector('.list-container');
    list_container.addEventListener('click', buttonHandler, true);
    
})();





const editTask = (() => {


})();
const deleteTask = (() => {


})();
const markCompleteTask = (() => {


})();

const dragTask = (() => {

})()






export {detectClickOnAddTask};



