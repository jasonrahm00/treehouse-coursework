//Problem: UI doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'),
    addButton = document.getElementsByTagName('button')[0],
    incompleteTasksHolder = document.getElementById('incomplete-tasks'),
    completedTasksHolder = document.getElementById('completed-tasks');

//Add a new task
var addTask = function() {
  console.log("Add task...");
  //When button is pressed
  //Create new list item with the text from #new-task
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements need to be modified and appended
}

//Edit existing task
var editTask = function() {
  console.log("Edit task...");
  //When edit button is pressed
    //If the class of the parent is .editMode
      //Switch from .editMode
      //Label text become the input value
    //Else
      //Switch to .editMode
      //input value becomes the label text

    //Toggle .editMode on the parent
}

//Delete existing task
var deleteTask = function() {
  console.log("Delete task...");
  //When the Delete button is pressed
    //Remove parent list item (li) from the ul
}

//Mark task as complete
var taskCompleted = function() {
  console.log("Complete task...");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark task as incomplete
var taskIncomplete = function() {
  console.log("Incomplete task...");
  //When the checkbox is unchecked
    //Append the task list item to #incomplete-tasks
}

//Set the click handler to the addTask function
addButton.onclick = addTask;