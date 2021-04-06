const form = `
<div class="edit_top">
    <div class='edit_input'>
        <input type='text' class='edit_title' placeholder="e.g. buy toothpaste">
    </div>
    <div class='edit_extra'>
        <div class='edit_tools'>
            <div class="edit_icon"></div>
            <div class="edit_icon"></div>
        </div>
    </div>
</div>

<div class='edit_bottom'>
    <input type="button" data-key='Enter' id='form_add_button' class='button-style1' value='Add Task'>
    <input type="button" data-key='Escape' id='form_cancel_button' class='button-style2' value='Cancel'>
</div>`;

const addTaskButton = `
    <img class='plus-icon' src='/src/images/plus.svg'>
    <div class='item_title add_task'>Add task</div>
`

const task = (title = 'No Title Given', dateStyleType = 'item_due_today', date = "Today") => {
    const taskHTML = `
        <div class='item_title'>${title}</div>
            <div class='item_tools'>
            <div class='${dateStyleType}'>Due ${date}</div>
            <div class='item_edit'><img class='edit-icon' src='/src/images/edit.svg'></div>
        </div>`
    
    return taskHTML;
}
export {form, addTaskButton, task};