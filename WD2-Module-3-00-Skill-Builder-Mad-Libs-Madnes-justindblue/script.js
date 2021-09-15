/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);
  
  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time that the form button is clicked. */
function generate() {

  // Retrieve form values.

  let firstLove = formValue("firstLove");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun1 = formValue("noun-1");
  let noun2 = formValue("noun-2");
  let noun3 = formValue("noun-3");
  let gamerTag = formValue("gamerTag");

  // Insert form values into madlib.

  let madLib = 
  
  `Dear ${firstLove},
  <br>
  Today is my final journal entry. Now that I am ${adjective1}, I will do my best to remember you for the ${adjective2} ${noun2} you were. 
  <br><br>
  Good luck with your ${noun1}, 
  <br>
  Your ${adjective3} ${noun3},
  
  ${gamerTag}`;
  // Output madlib to player.

  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container","generated");
  
}