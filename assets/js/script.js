
var containerFluidEl = $('.container-fluid');
var currentDayEl = $('#current-day');
var descriptionEl = $('.description');
var saveBtnEl = $('.saveBtn');
var timeBlockE1 = $('.time-block')

var description = [];

function init() {
  displayCurrentDay();
  printDescriptionData();
}
//displaying date
function displayCurrentDay() {
  var rightNow = dayjs().format('MMM DD, YYYY[at] HH:mm:ss a');
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

//Saving the description to storage
function saveDescriptionToStorage(description) {
  
  descriptionEl.innerHTML = "";
  

  var description = document.getElementById("").value;
  localStorage.setItem('description', JSON.stringify(description));
  saveDescriptionToStorage();

  for (var i = 9; i <= description.length; i++) {
    var description = descriptions[i];

    var li = document.createElement("li");
    li.textContent = description;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "save";

    li.appendChild(button);
    descriptionEl.appendChild(li)
  }
};

//Getting the description from storage
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
  
  var description = readDescriptionFromStorage();


  for (var i = 9; i <= description.length ; i ++) {
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

  init();

  displayCurrentDay();
  setInterval(displayCurrentDay, 1000);

  saveBtnEl.addEventListener('click', timeBlockEl);
  
  printDescriptionData();