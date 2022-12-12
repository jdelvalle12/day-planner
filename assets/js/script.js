// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var containerFluidEl = $('.container-fluid');
var currentDayEl = $('#current-day');
var descriptionEl = $('.description');
var saveBtnEl = $('.saveBtn');

var description = [];

//displaying date
function displayCurrentDay() {
  var rightNow = dayjs().format('MMM DD, YYYY');
  currentDayEl.text(rightNow);
}

//container-fluid element, to change the color in each background in each time block
containerFluidEl.children('#hour-9').children('textarea').css('background-color', '#d3d3d3');
containerFluidEl.children('#hour-10').children('textarea').css('background-color', '#d3d3d3');
containerFluidEl.children('#hour-11').children('textarea').css('background-color', '#d3d3d3');
containerFluidEl.children('#hour-12').children('textarea').css('background-color', '#ff6961');
containerFluidEl.children('#hour-1').children('textarea').css('background-color', '#77dd77');
containerFluidEl.children('#hour-2').children('textarea').css('background-color', '#77dd77');
containerFluidEl.children('#hour-3').children('textarea').css('background-color', '#77dd77');
containerFluidEl.children('#hour-4').children('textarea').css('background-color', '#77dd77');
containerFluidEl.children('#hour-5').children('textarea').css('background-color', '#77dd77');


function saveDescriptionToStorage(description) {
  console.log(saveDescriptionToStorage());
  descriptionEl.innerHTML = "";
  

  var description = document.getElementById("").value;
  localStorage.setItem('description', JSON.stringify(description));
  saveDescriptionToStorage();

  for (var i = 0; i < description.length; i++) {
    var description = descriptions[i];

    var li = document.createElement("li");
    li.textContent = description;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "save";

    li.appendChild(button);
    descriptionEl.appendChild(li)
}
  saveBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  var description = document.querySelector('.description').value;

  if (description === "") {
  return;
  }

});
}


function readDescriptionFromStorage() {
  var description = localStorage.getItem('description');
  if (description) {
    description = JSON.parse(description);
  } else {
    description = [];
  }
  return description;
}

function printDescriptionData() {  
  descriptionDisplayEl.empty();
  var description = readDescriptionFromStorage();
$(function () {
  
});

  for (var i = 0; i < description.length; i ++) {
    var description = descriptions[i];
    var description = dayjs(description.hour);
    
    var hour = dayjs().startOf('hour');

    var rowEl = $('<div>');

    
    if (timeBlock < i) {
      rowEl.addClass('past');
    } else if (timeBlock === i) {
      rowEl.addClass('present');
    } else if (timeBlock > i) {
      rowEl.addClass('future');
    } else {
      return false;
    };   

    rowEl.append(descriptionEL);
    descriptionDisplayEl.append(rowEl);
  }
}

 

  this.descriptionEl.on(saveBtnEl);

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

  displayCurrentDay();
  setInterval(displayCurrentDay, 1000);
  
  printDescriptionData();