// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'Now third one the longer than second longish item'
//   ];

//   var names = ['babu', 'karim', 'shahin', 'rofiqul'];
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
  var output = megaFriend(['babu', 'karim', 'shahidul', 'shahin', 'rofiqul']);
  console.log(output);