let array1 = [
  { balance: 1 },
  { balance: 15 },
  { balance: 16 },
  { balance: 18 },
  { balance: 19 },
];

let s = array1.reduce((acum, item) => {
  let result = acum + item.balance;
  console.log(acum + item.balance);
  return result;
}, 0);

//
let array2 = [
  { name: "mark", friend: "vlad" },
  { name: "vlad", friend: "dima" },
  { name: "danya", friend: "oleg" },
  { name: "oleg", friend: "artem" },
  { name: "", friend: "" },
  { name: "", friend: "" },
];

let newarray = array2.filter((e) => {
  if (e.friend !== "") {
    return true;
  } else {
    return false;
  }
});
console.log(newarray);

//

let array3 = [
  { name: "mark", friend: 5 },
  { name: "vlad", friend: 3 },
  { name: "danya", friend: 2 },
  { name: "oleg", friend: 6 },
];

let sorted = array3.sort((a, b) => {
  return b.friend - a.friend;
});
console.log(sorted);

let array4 = [
  { name: "mark", friend: 5, skills: "a" },
  { name: "vlad", friend: 3, skills: "b" },
  { name: "danya", friend: 2, skills: "b" },
  { name: "oleg", friend: 6, skills: "d" },
  { name: "oleg", friend: 6, skills: "k" },
  { name: "oleg", friend: 6, skills: "k" },
];

//const mySet = new Set();
//for (let i = 0; i < array4.length; i++) {
//mySet.add(array4[i].skills);
// mySet.add(array4[i]["skills"]);
//}
//console.log(mySet);

let newArray = array4.map((e) => {
  return e.skills;
});
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] == newArray[i - 1]) {
    newArray.splice(i - 1, 1);
  }
}
console.log(newArray.sort());

let newMessage = prompt("enter text");

function toUpperCase(string) {
  let changedArray = string.split(" ");
  let newArray = changedArray.map((e) => {
    if (e.length > 2) {
      return e[0].toUpperCase() + e.slice(1);
      //return e.shift().toUpperCase() + e;
    } else {
      return e;
    }
  });
  return newArray.join(" ");
}
let check = toUpperCase(newMessage);
console.log(check);
