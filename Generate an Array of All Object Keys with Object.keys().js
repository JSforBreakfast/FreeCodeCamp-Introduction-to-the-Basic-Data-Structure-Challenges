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

function getArrayOfUsers(users) {
  // change code below this line
return Object.keys(users);
  // change code above this line
}

console.log(getArrayOfUsers(users));
