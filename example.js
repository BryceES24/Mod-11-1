var table = 3;                  //Unit of table
var operator = 'addition';      // Type of calculation (defaults to addtion)
var i = 1;                      //Set counter to 1
var msg = '';                   // Message


iif (operator ==== 'addition') {            // If the operator variable says addition
    while (i < 11)  {                       // While counter is less than 11
        msg += i +'+ ' + table + ' = ' + (i + table) + 'br />'; // Calculation
        i++;                                //Add 1 to the counter
    }
} else {                                   //Otherwise
    while (i < 11) {                       // While counter is less than 11
        msg += i + ' x ' + table + ' = ' + (i * table) + 'br />';  // Calculation
        i++;                               //Add 1 to the counter
    }

    }



    // Write the message into the page
    var el = document.getElementById('backboard');
    el.innerHTML =msg;
