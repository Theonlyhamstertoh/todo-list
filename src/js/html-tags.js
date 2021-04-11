import { chooseDate } from "./tasks/formatDate";
import plus from "../images/plus.svg";
import edit from "../images/task_edit_icon.svg";
import deleteIcon from "../images/trash.svg";

const allImg = document.querySelectorAll("img");
allImg.forEach(el => {
  el.src = plus;
})
const form = `
<div class="form_top">
<div class='form_input'>
  <input type='text' class='form_title' placeholder="e.g. buy toothpaste">
</div>
<div class='form_extra'>
  <div class='form_tools'>
    <div class='date_Wrapper'>
      <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>
        <input type="date" class="datepicker-input">
      </span>
      <div class='date_value'>Calendar</div>
    </div>
  </div>
</div>
</div>

<div class='form_bottom'>
<input type="button" data-key='Enter' id='form_add_button' class='button-style1' value='Add Task'>
<input type="button" data-key='Escape id='form_cancel_button' class='button-style2' value='Cancel'>
</div>`;

const addTaskButton = `
    <img class='plus-icon' src='${plus}'>
    <div class='item_title add_task'>Add task</div>
`

const task = (title, date) => {

  const taskHTML = `
      <div class='item_check'><span class='checkmark'>&#10003;</span></div>
      <div class='item_title'>${title}</div>
          <div class='item_tools'>
          <div class='item_due'>${chooseDate(date)}</div>
          <img class='edit_icon' src="${edit}">
          <img class='delete_icon' src='${deleteIcon}'>


      </div>`
  
  return taskHTML;
}
export {form, addTaskButton, task};