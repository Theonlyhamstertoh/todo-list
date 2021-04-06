import * as htmlTag from "../html-tags";
import {addTask} from "./addTask";
const showForm = (() => {
    let IsFormEnabled = null;
    const getIsFormEnabled = () => {
        return IsFormEnabled;
    }
    const updateIsFormEnabled = (value) => {
        return value === true ? IsFormEnabled = true : IsFormEnabled = false;
    }

    const create_Form = (dateSection) => {
        const newForm = document.createElement('li');
        newForm.classList.add('form_wrapper');
        
        // add the HTML and append to the newForm 
        const formHTML = document.createRange().createContextualFragment(htmlTag.form);
        newForm.appendChild(formHTML);
        
        // append it to the webpage
        dateSection.appendChild(newForm);
        
        //add event listeners to the buttons of edit Form.
        const task_title = newForm.querySelector('.edit_title');
        const form_add_button = newForm.lastChild.childNodes[1];
        const form_cancel_button = newForm.lastChild.childNodes[3];
        
        form_cancel_button.addEventListener("click", cancel_Form);
        form_add_button.addEventListener("click", addTask.create_Task);
        task_title.focus();
        // update formEnabled so that only one edit form can exist in the webpage
        updateIsFormEnabled(true);
        // store formInfo (title, date, etc) so it can be accessed later
        formLocation.store_Info(dateSection, form_add_button, form_cancel_button, newForm, task_title);
        

        // enables or disables the add_task button base user input value length. If length === 0, it disables the button. Else enables. 
        disable_AddTaskButton();
        task_title.addEventListener('input', (e) => {
            const title = e.target.value;
            if(title.length > 0) {
                enable_addTaskButton();
            } else {
                disable_AddTaskButton();
            }
        })
    }

 

    const disable_AddTaskButton = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.add('disabled')
        formLocation.get_Info().form_add_button.disabled = true;
    }

    const enable_addTaskButton = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.remove('disabled')
        formLocation.get_Info().form_add_button.disabled = false;
    }

    const remove_Form = () => {
        remove_formEventListeners();
        formLocation.get_Info().newForm.remove();

        // adds add_Task button back
        createAddTaskButton(formLocation.get_Info().dateSection);
    }

    const remove_formEventListeners = () => {
        formLocation.get_Info().form_add_button.removeEventListener("click", addTask.create_Task);
        formLocation.get_Info().form_cancel_button.removeEventListener("click", cancel_Form);
    }
    // retrieve location of the form and then be able to delete it
    const formLocation = (() => {
        let formInfo = {};
        const store_Info = (dateSection, form_add_button, form_cancel_button, newForm, task_title) => {
            formInfo = {
                dateSection,
                form_add_button,
                form_cancel_button,
                newForm,
                task_title
            }
            return formInfo;
        }

        const get_Info = () => {
            return formInfo;
        } 

        return {
            store_Info,
            get_Info,
        }
        
    })()
    const cancel_Form = (e) => {        
        const form_wrapper = e.target.parentNode.parentNode;
        const dateSection = form_wrapper.parentNode;
        remove_formEventListeners();

        updateIsFormEnabled(false);
        createAddTaskButton(dateSection);
        form_wrapper.remove();


    }

    const removeAddTaskButton = (theButton) => {
        theButton.remove();
    }

    const createAddTaskButton = (dateSection) => {
        const newAddTaskBtn = document.createElement('li');
        newAddTaskBtn.classList.add('plus_add_button');

        // add the HTML append to NewAddTaskBtn
        const addTaskFragmentHTMl = document.createRange().createContextualFragment(htmlTag.addTaskButton);
        newAddTaskBtn.appendChild(addTaskFragmentHTMl);

        //append it to the webpage
        dateSection.appendChild(newAddTaskBtn);
    }

    return {
        create_Form, 
        removeAddTaskButton,
        updateIsFormEnabled, 
        getIsFormEnabled, 
        formLocation,
        disable_AddTaskButton, 
        remove_Form,
    }
})();

function test() {
    console.log("test")
}
export {showForm, test};
