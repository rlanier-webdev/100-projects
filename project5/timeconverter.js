/*  

    Author: RaShunda Lanier
    Email: dev@citygirlcodes.me

    Convert time (hours/minutes) to decimal hours
    1 min = .02 decimal hours, 2 min = .03 decimal hours, 25 mins = .42 decimal hours
        
        Example: 3 hours and 45 minutes
        1. Divide min by 60; 45/60 = 0.75
        2. Add hours; 3 + 0.75 = 3.75 hours

        - hours
        - mins
        - time
        - decimal hours

*/


function convertTime(){

    var str = " Decimal Hours";
    var errorMsg = "Error: Must be numbers only."
    
    var hrs = parseFloat(document.getElementById("hrs").value);
    var mins = parseFloat(document.getElementById("mins").value);
    

    // BUG: Empty input caused NaN error, set to 0 instead
    // parseFloat treats an empty input as NaN

    /* 
        I need to be able to convert an empty string to 0
        I need to be able to throw an error when an invalid char is entered
    */

/*  hrs = hrsInput == '' ? 0 : hrsInput;
    mins = minsInput == '' ? 0 : minsInput; */
    


    if (isNaN(hrs) || isNaN(mins)) {
 
        // Change error message to red
        document.getElementById("message").style.color = "red";

        // Display error message
        document.getElementById("message").innerHTML = errorMsg;
        
    } else {

        // Calculate decimal hours
        var dHrs = hrs + (mins / 60);
        
        // Round to 2 decimal points
        dHrs = dHrs.toFixed(2);
        
        // Change color back to original
        document.getElementById("message").style.color = "#104aa7";

        // Display decimal hours
        document.getElementById("message").innerHTML = dHrs.concat(str);
    }

}


