var cleanPhone; //just a global variable
var phones = [ // array with bunch of possible scenarios
        '555-555-5555',
        '(555)555-5555',
        '555 555 5555',
        '555 555-555',
        '1-555-555-5555',
        '(1)555-555-5555',
        '5555555555',
        '555-five-55-aebdgtxi;;3tt4greqr6seven',
        '5-trumprules-555-5-5-5-5-5-5',
        '2798504trumpforprez23587928579428795458792',
        '1-800-ninjas-are-cool',
        '1900-acdc4life.'
    ]
function lettertoValue(str){ //function to match numbers on keypad
  var num;
  if (str.match(/[abc]/i)){ //'i' in here ignores case sensitivity
    num = 2;
  }else if(str.match(/[def]/i)){
    num = 3;  
  }else if(str.match(/[ghi]/i)){
    num = 4;
  }else if(str.match(/[jkl]/i)){
    num = 5;
  }else if(str.match(/[mno]/i)){
    num = 6;
  }else if(str.match(/[pqrs]/i)){
    num = 7;
  }else if(str.match(/[tuv]/i)){
    num = 8;
  }else if(str.match(/[wxyz]/i)){
    num = 9;
  }
  return num;
}
function cleanUp(input){
  var convertedPhone = ""
  string = "";
  for (i in input){
   var temp = (input[i].match(/\w/))
   if (temp != null ){
     string += temp;
    }
  }
  for (b in string){
    index = b;
    (string[b].match(/\D/)) ? convertedPhone += lettertoValue(string[b]) : convertedPhone += string[b]; //ternery operator
  }
  // and finally doing splicing to get 10 digits back
  var phone = convertedPhone.split('');//converting to array phone
  // check if array has 10 digits
  if (phone.length == 10){
      cleanPhone = phone.join('');
      // console.log("10 digits phones", cleanPhone)
    }else if (phone.length == 11){
      phone = phone.splice(1, 11)
      cleanPhone = phone.join('');
      // console.log("if input was 11 digits", cleanPhone)
    }else if (phone.length > 11){
      phone = phone.splice(0, 10);
      cleanPhone = phone.join('');
      // console.log("if input was > 11 digits", cleanPhone)
    }else{
      return 'incorrect number, please reenter phone number';
    }
    
    var m = cleanPhone.match(/^(\d{3})(\d{3})(\d{4})$/);//where ^ means beginning of the like
    formPhone = (m[1] + "-" + m[2] + "-" + m[3])

      return formPhone;
}


for (x of phones){  //iterating through phone array
    console.log(cleanUp(x));
}