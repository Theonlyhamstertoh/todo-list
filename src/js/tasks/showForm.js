import * as htmlTag from "../html-tags";
import {addTask} from "./task";
import {chooseDate, formatDate} from "./formatDate";
import { buttonHandler } from "../domController";

const showForm = (() => {
    let IsFormEnabled = null;
    const getIsFormEnabled = () => {
        return IsFormEnabled;
    }
    const updateIsFormEnabled = (value) => {
        return value === true ? IsFormEnabled = true : IsFormEnabled = false;
    }

    const create = (dateSection, isItInEditMode, editElement, theElementObject) => {
        const newForm = document.createElement('li');
        newForm.classList.add('form_wrapper');
        
        // add the HTML and append to the newForm 
        const formHTML = document.createRange().createContextualFragment(htmlTag.form);
        newForm.appendChild(formHTML);
        
        // append it to the webpage
        dateSection.appendChild(newForm);
        
        //add event listeners to the buttons of edit Form.
        const task_title = newForm.querySelector('.form_title');
        const date_Wrapper = newForm.querySelector(".date_Wrapper");
        const form_add_button = newForm.lastChild.childNodes[1];
        const form_cancel_button = newForm.lastChild.childNodes[3];

 
    

        // update formEnabled so that only one edit form can exist in the webpage
        updateIsFormEnabled(true);
        // store formInfo (title, date, etc) so it can be accessed later
       

        // listen 
        const dateInput = document.querySelector('.datepicker-input');
        const date_value = document.querySelector('.date_value');
        dateInput.addEventListener('input', () => {
            const date_value = document.querySelector('.date_value');
            const dateInput = document.querySelector('.datepicker-input');
            date_value.textContent = chooseDate(dateInput.value);
            task_title.focus()
        });

        formLocation.store_Info(
            dateSection, 
            form_add_button, 
            form_cancel_button, 
            newForm, 
            task_title,
            dateInput,
            date_value,
   
        );
        // initialilize
        addTaskButton.disable();
        task_title.focus();
     
        // enable button if user input text is greater than one. Disable button if not.

   
        

        // listens for keypress so that "enter" and "cancel" key works
        window.addEventListener("keydown", detectKeyPress);
        if(isItInEditMode === true) {
            console.log(theElementObject)
            addTaskButton.enable();
            task_title.value = theElementObject.theTitle;
            if(theElementObject.date !== '') {
                date_value.textContent = chooseDate(theElementObject.date);
                dateInput.value = theElementObject.date;
            }
            editElement.insertAdjacentElement("afterend", newForm);
            task_title.focus();
            form_cancel_button.addEventListener('click', () => {
                remove();
                addTask.create(task_title.value, dateInput.value)

            })
        } else {
            form_cancel_button.addEventListener("click", () => {
                remove();
                addTaskButton.create(formLocation.get_Info().dateSection);
    
            });
        }
        form_add_button.addEventListener("click", addTaskButtonHandler);
        task_title.addEventListener('input', () => {
            if(task_title.value.length > 0) {
                addTaskButton.enable();
            } else {
                addTaskButton.disable();
            }
        })

    }

    const checkIfInEditMode = () => {

    }
    const addTaskButtonHandler = () => {
        const task_title = document.querySelector('.form_title');
        const date_Input = document.querySelector('.datepicker-input');
        const date_value = document.querySelector('.date_value');
        
        addTask.create(task_title.value, date_Input.value)
        task_title.value = "";
        task_title.focus();
        addTaskButton.disable();
        date_Input.value='';
        date_value.textContent = 'Calendar';
    }
    // removes the event listeners, the elements, and recreate addTask button. 
    const remove = () => {
        // remove all event listeners first
        formLocation.get_Info().form_add_button.removeEventListener("click", addTaskButtonHandler);
        formLocation.get_Info().form_cancel_button.removeEventListener("click", remove);
        window.removeEventListener("keydown", detectKeyPress);

        updateIsFormEnabled(false);
        // remove from dom tree
        formLocation.get_Info().newForm.remove();

        // adds add_Task button back
        

    }

    return {
        create, 
        updateIsFormEnabled, 
        getIsFormEnabled,  
        remove,
        addTaskButtonHandler
    }
})();


const addTaskButton = (() => {
    const remove = (theButton) => {
        theButton.remove();
    }

    const create = (dateSection) => {
        const newAddTaskBtn = document.createElement('li');
        newAddTaskBtn.classList.add('plus_add_button');

        // add the HTML append to NewAddTaskBtn
        const addTaskFragmentHTMl = document.createRange().createContextualFragment(htmlTag.addTaskButton);
        newAddTaskBtn.appendChild(addTaskFragmentHTMl);

        //append it to the webpage
        dateSection.appendChild(newAddTaskBtn);
    }

    const disable = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.add('disabled')
        formLocation.get_Info().form_add_button.disabled = true;
    }

    const enable = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.remove('disabled')
        formLocation.get_Info().form_add_button.disabled = false;
    }

    return {remove, create, disable, enable}
})();

const detectKeyPress = (e) => {
    const task_title = document.querySelector('.form_title');
    const dateInput = document.querySelector('.datepicker-input');

    if(e.key === "Escape") {
        showForm.remove();
        addTaskButton.create(formLocation.get_Info().dateSection);
    } else if(e.key === 'Enter' && task_title.value.length > 0 ) {
        showForm.addTaskButtonHandler();

    }
}

// retrieve location of the form and then be able to delete it
const formLocation = (() => {
    let formInfo = {};
    const store_Info = (dateSection, form_add_button, form_cancel_button, newForm, task_title, task_dueDate, date_value) => {
        formInfo = {
            dateSection,
            form_add_button,
            form_cancel_button,
            newForm,
            task_title,
            task_dueDate,
            date_value,
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

export {showForm, formLocation, addTaskButton};
