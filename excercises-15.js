function groupAnimals(animals) {
  // you can only write your code here!
  
  animals.sort()
  var animalsVarians = [[]]
  animalsVarians[0].push(animals[0])

  var indexOfAnimals = 0
  for(var i=1;i<animals.length;i++){
      if (animals[i][0]=== animalsVarians[indexOfAnimals][0][0]){
          animalsVarians[indexOfAnimals].push(animals[i])
      } else {
          indexOfAnimals = indexOfAnimals + 1
          animalsVarians[indexOfAnimals]= [animals[i]]
      }
  }
  animalsVarians[0].sort()
  animalsVarians[0].reverse()
  
  return animalsVarians
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]