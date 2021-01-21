
// functon for kilometerToMeter 

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'Please enter positive number';
    }
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(-15);
console.log(result);



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



// function for hotelCost 

function hotelCost(days) {
    var cost =0;
    if (days < 0) {
        return 'Please enter positive number';
    }
    if (days <= 10) {
        cost = days * 100;
    } 
    else if (days <=20){
        var firstSlot = 10 * 100;
        var extraDays = days - 10;
        var secondSlot = extraDays * 80;
        cost = firstSlot + secondSlot;
    }
    else {
        var firstSlot = 10 * 100;
        var secondSlot = 10 * 80;
        var extraDays = days - 20;
        var thirdSlot = extraDays * 50;
        cost = firstSlot + secondSlot + thirdSlot;
    }
    return cost;
}
var totalCost = hotelCost(15);
console.log(totalCost);



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

  var names = ['Shakib', 'Tamim', 'Mashrafe', 'Mushfiq', 'Mahmudullah'];
  var outPut = megaFriend(names);
  console.log(outPut);


