var currentDate = $("#currentDay")
var container = $(".container")
var timeOfDay = $(".time-block")



var today = moment().format("dddd, MMMM  Do")
currentDate.text(today)


//fill in time block
times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]

for(i=0; i<times.length; i++){
    var newRow = $('<div>')
    newRow.addClass = $('.row')
    timeOfDay.text(times)
}



















//pseudocode
//create form in  html. save form input in local storage
//



