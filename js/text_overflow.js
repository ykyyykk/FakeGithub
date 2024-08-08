//會在Latest changes用到
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".change_info");
  items.forEach((item) => {
    if (item.textContent.length > 90) {
      //把text前面的空格刪掉 不然slice的時候index是錯的
      item.textContent = item.textContent.trimStart();
      item.textContent = item.textContent.slice(0, 90) + "...";
    }
  });
});
