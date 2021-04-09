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
    <img class='plus-icon' src='/src/images/plus.svg'>
    <div class='item_title add_task'>Add task</div>
`

const task = (title = 'No Title Given', dateStyleType = 'item_due-today', date = "Today") => {
    const taskHTML = `
        <div class='item_title'>${title}</div>
            <div class='item_tools'>
            <div class='item_due'>Due ${date}</div>
            <img class='edit_icon' src='/src/images/task_edit_icon.svg'>
            <img class='delete_icon' src='/src/images/trash.svg'>


        </div>`
    
    return taskHTML;
}
export {form, addTaskButton, task};