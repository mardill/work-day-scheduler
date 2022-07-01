var currentDate = $("#currentDay")
var container = $(".container")
var timeOfDay = $(".time-block")
var scheduleInput = $('.hour')
var saveBut = $('.saveBtn')
var rows = $('.row')



var today = moment().format("dddd, MMMM  Do")
currentDate.text(today)


//create time block using jquery instead of hard coding into html

function printTime(){
    var times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]

    for(i=0; i<times.length; i++){
        var newRow = $('<div>').addClass('row')
        var newTime = $('<div>').addClass('time-block col-md-2').text(times[i])
        container.append(newRow)
        newRow.append(newTime)
    }
    
}

printTime()






















//pseudocode
//create form in  html. save form input in local storage
//



