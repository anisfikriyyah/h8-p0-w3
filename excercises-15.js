function groupAnimals(animals) {
  // you can only write your code here!
  var abjad = "abcdefghijklmnopqrstuvwxyz"
  var animalsGroup = []

  for (var i=0;i<abjad.length;i++){

    var animalsVarians = []
    for (var j=0;j<animals.length;j++){
       if (abjad[i] === animals[j][0]) {
          animalsVarians.push(animals[j])
        } 
    }
    if (animalsVarians.length !== 0){
      animalsGroup.push(animalsVarians)
    }
  }
 return animalsGroup
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
