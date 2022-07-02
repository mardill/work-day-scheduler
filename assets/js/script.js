var currentDate = $("#currentDay")
var container = $(".container")
var timeOfDay = $(".time-block")
var scheduleInput = $('.hour')
var saveBut = $('.saveBtn')
var rows = $('.row')
var formInput = $("#input")
var hour = $(".hourOfDay")
var input = $(".form-control")
var allInputs = $( ":input" );


// create time for header and current hour
var today = moment().format("dddd, MMMM  Do")
currentDate.text(today)

var currentHour = moment().startOf("hour")

// define times to use for rows
var timesStrings = [9,10,11,12,13,14,15,16,17,18,19,20,21]

var times = timesStrings.map(elem => moment(elem, 'h'));
console.log(times);


//create rows with time, form, and save button using jquery instead of hard coding into html
function printTime(){

    for(i=0; i<times.length; i++){

        var newRow = $('<div>').addClass('row')

        var newTime = $('<div>').addClass('time-block col-md-2').text(times[i].format("h a"))

        var formFill = $('<textarea>').addClass('hour col-md-8')

        var newBtn = $('<button>').addClass('saveBtn col-md-2')
        
        container.append(newRow)
        newRow.append(newTime, formFill, newBtn)

        // create coloring based on hour of day
        if(times[i].isSame(currentHour)){
            form.addClass('present')
        }else if(times[i].isBefore(currentHour)){
            form.addClass('past')
        } else{
        form.addClass('future')
    }   
    }

}

printTime()





function showInput(){
    console.log(formInput)

}


saveBut.on("click", showInput)













        // var form = $('<div>').addClass('hour form-group col-md-8')
        // form.append($('<input>'), {type:"text", id:"input"})








//pseudocode
//create form in  html. save form input in local storage
//



