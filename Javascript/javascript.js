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

// if(document.getElementById("r$saucePrice").onclicked = function(){
//  var buttonState = 1;
//  alert(buttonState);
// }


function riceSaucealert(){
  var money= prompt("how much do you have:");
  if (money<"2800"){
   alert ("insufficient fund");
  } else{ showalert(); }
}

function riceStewAlert(){
  var money= prompt("how much do you have:");
  if (money<"1500"){
   alert ("insufficient fund");
  } else{ showalert(); }
}

function jellofAlert(){
  var money= prompt("how much do you have:");
  if (money<"2000"){
   alert ("insufficient fund");
  } else{ showalert(); }
}

function ghanariceAlert(){
  var money= prompt("how much do you have:");
  if (money<"1750"){
   alert ("insufficient fund");
  } else{ showalert(); }
}


function SoupAlert() {
 var Name=document.getElementById("usr").value;
 var address=document.getElementById("adr").value;
 var Date=document.getElementById("date").value;
 var Time=document.getElementById("appt").value;

 alert( "Your Order has been confirmed\n" + "\nName: "+Name+"\nYour Address: "+address +"\nDate of delivery: " + Date +"\nTime of delivery: " + Time + "\nThank you!");

}


function swallowAlert() {
 var Name=document.getElementById("usr").value;
 var address=document.getElementById("adr").value;
 var Date=document.getElementById("date").value;
 var Time=document.getElementById("appt").value;

 alert( "Your Order has been confirmed\n" + "\nName: "+Name+"\nYour Address: "+address +"\nDate of delivery: " + Date +"\nTime of delivery: " + Time + "\nThank you!" + "\n" + "\nComment: Swallow needed.");

}


function showSoupalert() {
   var wantSoup;
  if (confirm("Do you want swallow ?")) {
    swallowAlert();
  } else {
    SoupAlert();
  }
 }
  // document.getElementById("demo").innerHTML = txt;
//  var Name=document.getElementById("usr").value;
//  var address=document.getElementById("adr").value;
//  var Date=document.getElementById("date").value;
//  var Time=document.getElementById("appt").value;

//  alert( "Your Order has been confirmed\n" + "\nName: "+Name+"\nYour Address: "+address +"\nDate of delivery: " + Date +"\nTime of delivery: " + Time + "\nThank you! soup");
// }


function price(){

}

function showContact() {
 var contact_name=document.getElementById("usrname").value;
 var contact_email=document.getElementById("email").value;
 var contact_tele=document.getElementById("tel").value;
 var contact_address=document.getElementById("contactAddress").value;

 alert("We will get back to you\n"+ "\nName: " + contact_name + "\nEmail: " + contact_email + "\nTelephone: "+ contact_tele +"\nAddress: " + contact_address);
}

const staffs =[];
function addStaff(){ 
 var newStaff= prompt("Add new Staff");
 staffs.push(newStaff);
}

 function viewStaff(){
alert(staffs);
 }



