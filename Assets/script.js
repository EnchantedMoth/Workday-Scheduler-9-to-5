// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//holds my hours for building the day
var hours = ["09","10","11","12","13","14","15","16","17"]


var currentHour = dayjs().format('HH')
console.log(typeof(currentHour))



// var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



$(document).ready(function () {

  function check(){
    for (let i = 0; i < hours.length; i++) {
      var currentDiv = document.querySelector("#hour-" + hours[i])
      console.log(hours[i])
    
      if(hours[i] < currentHour){
        currentDiv.className = "row time-block past"
      } else if(hours[i] === currentHour){
        currentDiv.className = "row time-block present"
      } else {
        currentDiv.className = "row time-block future"
      }
      var textArea = localStorage.getItem("hour-" + hours[i])
      console.log(textArea)
      if(textArea !== null)
      currentDiv.children[1].append(textArea)
      
    }
    }
    
    check ()

    var saveBtn = $(".saveBtn")

    function saveTextArea() {
      var textArea = $(this).siblings('textarea');
      var divId = $(this).parent().attr('id');
      console.log(divId)
      localStorage.setItem(divId, textArea.val())
    }

    saveBtn.on('click', saveTextArea)
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
  var currentDayEl = document.querySelector("#currentDay")
  function displayDate() {
  var todaysDate = dayjs().format('dddd, MMMM D')
  currentDayEl.textContent = todaysDate
  }

  displayDate()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


