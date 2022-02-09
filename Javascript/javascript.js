// var customalert=document.getElementById("customAlert");


// function showalert() {
//    customalert.style.display="block";
// }

// function hidealert() {
//  customalert.style.display="none";
// }


function showalert() {
 var Name=document.getElementById("usr").value;
 var address=document.getElementById("adr").value;
 var Date=document.getElementById("date").value;
 var Time=document.getElementById("appt").value;

 alert( "Your Order has been confirmed\n" + "\nName: "+Name+"\nYour Address: "+address +"\nDate of delivery: " + Date +"\nTime of delivery: " + Time + "\nThank you!");

}


function showContact() {
 var contact_name=document.getElementById("usrname").value;
 var contact_email=document.getElementById("email").value;
 var contact_tele=document.getElementById("tel").value;
 var contact_address=document.getElementById("contactAddress").value;

 alert("We will get back to you\n"+ "\nName: " + contact_name + "\nEmail: " + contact_email + "\nTelephone: "+ contact_tele +"\nAddress: " + contact_address);
}
