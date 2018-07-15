function groupAnimals(animals) {
  // you can only write your code here!
  

  var kamus = "abcdefghijklmnopqrstuvwxyz"
  var AnimalsVarians=[]
  for(var i=0;i<kamus.length;i++){
    // console.log(kamus[i])
    var temp = []
    for (var j=0; j < animals.length; j++) {
      if(kamus[i] === animals[j][0]){
        temp.push(animals[j])
      }
    }
    if (temp.length !== 0) {
      AnimalsVarians.push(temp)
    }
    //   result = result + kamus[i]
  }
  return result

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
