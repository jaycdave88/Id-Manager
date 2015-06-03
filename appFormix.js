function IdManager(n) {
  this.max = n; 
  var idens = generateIds(n);
  this.availableIds = idens;
  this.occupiedIds = [];
}

function generateIds(n) {
  arr = [];
  for (i = 0; i < n; i++) {
      arr.push(i);
  }
  return arr;
}

IdManager.prototype.getId = function() {
  var idOut = this.availableIds.pop();
  return this.occupiedIds.push(idOut);
};

IdManager.prototype.freeId = function(id) {
  if (this.isUsed(id)) {
      var idIn = this.occupiedIds.splice(this.occupiedIds.indexOf(id), 1);
      return this.availableIds.push(idIn[0]);
  } else {
      console.log("this id isn't in use!");
  }
};

IdManager.prototype.isUsed = function(id) {
  return this.occupiedIds.indexOf(id) >= 0;

};

// TESTS
// test = new IdManager(5)
// test.getId() == 1 // true
// test.getId() == 2 // true
// test.getId() == 3 // true
// test.getId() == 4 // true
// test.getId() == 5 // true
// test.getId() == 6 // true
// test.getId() == 9 // false
// test.getId() == 55 // false
// 
// Output
// 
myIdManager = new IdManager(10);

// called for each time method runs 
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();
myIdManager.getId();

// User UI
console.log("available ids:");
console.log(myIdManager.availableIds);
console.log("occupied ids:");
console.log(myIdManager.occupiedIds);


myIdManager.freeId(5);

// User UI
console.log("available ids:");
console.log(myIdManager.availableIds);
console.log("occupied ids:");
console.log(myIdManager.occupiedIds);
