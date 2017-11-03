function check(){

  var o1=document.getElementById("name");
  var o2=document.getElementById("name_error");
  var o3=document.getElementById("sname");
  var o4=document.getElementById("sname_error");
  var o5=document.getElementById("email");
  var o6=document.getElementById("email_error");
  var o7=document.getElementById("telephone");
  var o8=document.getElementById("telephone_error");
  var o9=document.getElementById("message");
  var o10=document.getElementById("message_error");
  var o11=document.getElementById("vyear");
  var o12=document.getElementById("vyear_error");
  var o13=document.getElementById("vmake");
  var o14=document.getElementById("vmake_error");
  var o15=document.getElementById("vmodel");
  var o16=document.getElementById("vmodel_error");
  var o17=document.getElementById("vengine");
  var o18=document.getElementById("vengine_error");
  var o19=document.getElementById("drivetrain");
  var o20=document.getElementById("drivetrain_error");
  var o21=document.getElementById("induction");
  var o22=document.getElementById("induction_error");
  var o23=document.getElementById("result");

  if (o1.value == ""){
      o2.innerHTML = "The Name field is required.";}
    else {
      o2.innerHTML="";
    }
  if (o3.value == ""){
      o4.innerHTML = "The Surname field is required.";}
    else {
      o4.innerHTML="";
    }
  if (o5.value == ""){
      o6.innerHTML = "The Email field is required.";}
    else {
      o6.innerHTML="";
    }
  if (o7.value == ""){
      o8.innerHTML = "The Telephone field is required.";}
    else {
      o8.innerHTML="";
    }
  if (o9.value == ""){
      o10.innerHTML = "The Message field is required.";}
    else {
      o10.innerHTML="";
    }
  if (o11.value == ""){
      o12.innerHTML = "The Vehicle Year is required.";}
    else {
      o11.innerHTML="";
    }
  if (o13.value == ""){
      o14.innerHTML = "The Vehicle Make is required.";}
    else {
      o13.innerHTML="";
    }
  if (o15.value == ""){
      o16.innerHTML = "The Vehicle Model is required.";}
    else {
      o15.innerHTML="";
    }
  if (o17.value == ""){
      o18.innerHTML = "The Engine type is required.";}
    else {
      o17.innerHTML="";
    }
  if (o19.value == ""){
      o20.innerHTML = "The Drivetrain type is required.";}
    else {
      o19.innerHTML="";
    }
  if (o21.value == ""){
      o22.innerHTML = "The Induction type is required.";}
    else {
      o21.innerHTML="";
    }
}
