// node tutorial/UnitTest/script.js 這樣去呼叫 注意路徑 有可能因為更改過錯誤
// 記得有方法可以讓他讀取 .env 檔案 但忘記怎麼做了
console.log(process.env.SECRET_VALUE);

const person = {
  name: "Kyle",
  age: 29,
};

function isAdult(person) {
  return person.age >= 18;
}

function sum(a, b) {
  return a + b;
}

console.log(isAdult(person));
