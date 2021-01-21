/*
// megaFriend
function megaFriend(names) {
    var nameLength = 0;
    var longestName = names[0];
    
    for (var i = 0; i < names.length; i++) {        
      if (names[i].length > nameLength) {
        nameLength = names[i].length;
        longestName = names[i];
      }
    }
    return longestName;
  }
  var names = ['Shakib', 'Tamim', 'Mashrafe', 'Mushfiq', 'Mahmudullah'];
  var outPut = megaFriend(names);
  console.log(outPut);
  */

  /*
// function for  budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {

        return 'Please enter positive number';
    } 
    else{

    var total = watch * 50 + phone * 100 + laptop * 500;
    return total;
}
    }
var totalBudget = budgetCalculator(10, -17, 10);
console.log(totalBudget);
*/

// function for megaFriend 

function megaFriend(names) {
    var nameLength = 0;
    var longestName = names[0];
    
    for (var i = 0; i < names.length; i++) {  
              
      if (names[i].length > nameLength) {
        nameLength = names[i].length;
        longestName = names[i];
      }
    }
    return longestName;
  }

  var names = ['Shakib', 'Tamim123456', 'Mashrafe', 'Mushfiq', 'Mahmudullah'];
  var outPut = megaFriend(names);
  console.log(outPut);