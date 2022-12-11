// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var containerFluidEl = $('.container-fluid');
var currentDayEl = $('#current-day');
var timeBlockPastEl = $('.row time-block past');
var timeBlockPresentEl = $('.row time-block present');
var timeBlockFutureEl = $('.row time-block future');
var descriptionEl = $('.description');

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



function readDescriptionFromStorage() {
  var descriptionEl = localStorage.getItem('description');
  if (descriptionEl) {
    descriptionEl = JSON.parse(description);
  } else {
    description = [];
  }
  return description;
}

function saveDescriptionToStorage(description) {
  localStorage.setItem('description', JSON.stringify(description));
}

function printDescriptiontData() {

  descriptionDisplayEl.empty();
  
  var description = readDescriptionFromStorage();

$(function () {
  var timeBlockEl = [
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
  ];
});

  for (var i = 0; i < timeBlock.length; i ++) {
    var timeBlock = timeBlock[i];
    var timeBlock = dayjs(timeBlock);
    
    

    if (timeBlock < i) {
      rowEl.addClass('past');
    } else if (timeBlock === i) {
      rowEl.addClass('present');
    } else if (timeBlock > i) {
      rowEl.addClass('future');
    } else {
      return false;
    };   
  }
}

function descriptionIndex() {
  var descriptionIndex = parseInt($(this).attr('saveBtn'));
  var description = readDescriptionFromStorage();
  
  saveProjectsToStorage(description);
}

function handleDescriptionSaveBtn(event) {
  event.preventDefault();
  document.addEventListener('click', saveBtn);
  this.descriptionEl.on(saveBtn);
  
  

}
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
  