
var submitBtn = document.getElementById("submitBtn");
var nameText = document.getElementById("nameText");
var studentID = document.getElementById("studentID");
var course = document.getElementById("course");
var venue = document.getElementById("venue");
var timeslot = document.getElementById("timeslot");
var timeslotuntil = document.getElementById("timeslotuntil");

function submitClick()
{
	$(document).ready(function(){

	window.alert("test submit");
	var firebaseRef = firebase.database().ref();

	var mnameText = nameText.value;
	var mstudentID = studentID.value;
	var mcourse = course.value;
	var mvenue = venue.value;
	var mtimeslot = timeslot.value;
	var mtimeslotuntil = timeslotuntil.value;


	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var today = dd + '/' + mm + '/' + yyyy;
	var tomorrow = dd+1 + '/' + mm + '/' + yyyy;
	var mdatebook = today;


var rootRef = firebase.database().ref().child("Bookings");
rootRef.on("child_added", snap=>{

	var studentNameData = snap.child("studentName").val();
	var studentIDData = snap.child("studentID").val();
	var dateBookedData = snap.child("dateBooked").val();
	var endTimeData = snap.child("end").val();
	var startTimeData = snap.child("start").val();
	var venueData = snap.child("venue").val();



});
if (mstudentID==studentIDData)
{
	alert("You have booked!");
}
else 
{
	firebaseRef.child("Bookings").push().set({
		studentName:mnameText,
		studentID:mstudentID,
		studentCourse:mcourse,
		venue:mvenue,
		start:mtimeslot,
		end:mtimeslotuntil,
		dateBooked:mdatebook
	}); 

}
	

});

}
