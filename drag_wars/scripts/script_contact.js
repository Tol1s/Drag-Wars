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
  var o11=document.getElementById("result");

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
}
