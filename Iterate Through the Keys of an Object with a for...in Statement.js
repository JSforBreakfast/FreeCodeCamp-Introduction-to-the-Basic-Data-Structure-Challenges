let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let count = 0;
  for (let user in users) {
    if (users[user].online) {
      count++;
    }
  }
  return count;
  // change code above this line
}

console.log(countOnline(users));
