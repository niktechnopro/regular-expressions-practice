var user = prompt("please enter the phone number");
function convertPhone(phoneStr){
  //step one - cleaning - getting rid of not digits
  var phone = "" //creating new string that becomes our phone#
  for (i in phoneStr){
    if (phoneStr[i].match(/\d/)){
      phone += phoneStr[i]; //returns only digits
    }
  }
  //check if array has 10 digits
  if (phone.length == 10){
    var m = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    var formPhone = (m[1] + "-" + m[2] + "-" + m[3])
  }else if (phone.length == 11 && phone[0] == '1'){
    //first digit must be removed
    var m = phone.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
    var formPhone = (m[2] + "-" + m[3] + "-" + m[4]);
  }else{
    var formPhone = "incorrect phone number";
  }
  return formPhone;
}
console.log(convertPhone(user));