$(document).ready(function() {
  var dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDate").html(dateAndTime);
});

// hours each time block