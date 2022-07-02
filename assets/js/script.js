var currentDate = $("#currentDay")
var container = $(".container")
var timeOfDay = $(".time-block")
var scheduleInput = $('.hour')
var saveBut = $('.saveBtn')
var rows = $('.row')
var hour = $(".hourOfDay")
var input = $(".form-control")


// create time for header and current hour
var today = moment().format("dddd, MMMM  Do")
currentDate.text(today)

var currentHour = moment().startOf("hour")

// define times to use for rows
var timesArray = [9,10,11,12,13,14,15,16,17]

// transform time array to times using moment
var times = timesArray.map(elem => moment(elem, 'h'));
console.log(times);


//create rows with time, form, and save button using jquery instead of hard coding into html
function printTime(){

    for(i=0; i<times.length; i++){

        var newRow = $('<div>').addClass('row')

        var newTime = $('<div>').addClass('time-block col-md-2').text(times[i].format("h a"))

        // add unique id to every textarea
        var formFill = $('<textarea>').addClass('hour col-md-8').attr("id", "newId"+i)

        var newBtn = $('<button>').addClass('saveBtn col-md-2').text("save")
        
        container.append(newRow)
        newRow.append(newTime, formFill, newBtn)

        // create coloring based on hour of day
        if(times[i].isSame(currentHour)){
            formFill.addClass('present')
        }else if(times[i].isBefore(currentHour)){
            formFill.addClass('past')
        } else{
            formFill.addClass('future')
        }   

        // define variable to text area ID's
        var save1 = $("#newId0")

        // save textarea values in local storage and retrieve them to show on refresh
        function saveInput(){
            console.log(save1Val)
            var save1Val = save1.val()
            localStorage.setItem("input", JSON.stringify(save1Val))
        }
         
        newBtn.on("click", saveInput)
        // sets where and which data to display from local storage
        function showInput(){
            var savedSchedule = JSON.parse(localStorage.getItem("input"))
            save1.text(savedSchedule)
        }
        
        showInput()
    }

}

printTime()

