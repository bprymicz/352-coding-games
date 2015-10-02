var doors = [];
var open = [];
var closed = [];

for (var i = 0; i < 100; i++){
  doors.push(false);
}

for (var d = 1; d <= 100; d++) {
  for (var x = 0; x < 100; x += d) {
    doors[x] = !doors[x];
  }
}

for (var j = 0; j < 100; j++){
  if (doors[j]) {
    open.push(j);
  } else {
    closed.push(j);
  }
}

console.log('Open: ', open.join(','));
console.log('Closed: ', closed.join(','));