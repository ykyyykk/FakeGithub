document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".change_item");
  items.forEach((item) => {
    if (item.textContent.length > 90) {
      //把前面的空格刪掉 不然再分割 index是錯的
      item.textContent = item.textContent.trimStart();
      item.textContent = item.textContent.slice(0, 90) + "...";
    }
  });
});
