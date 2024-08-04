// https://www.youtube.com/watch?v=_gKEUYarehE

// 取得darkmode參數
var darkmode = localStorage.getItem("darkmode");
const theme_switch_btn = document.getElementById("theme_switch");
const iconElement = theme_switch_btn.querySelector(
  ".material-symbols-outlined"
);

document.addEventListener("DOMContentLoaded", () => {
  //   這裡要和button相反
  if (darkmode === "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

theme_switch_btn.addEventListener("click", () => {
  // 取得darkmode參數
  darkmode = localStorage.getItem("darkmode");
  if (darkmode === "active") {
    disableDarkmode();
  } else {
    enableDarkmode();
  }
});

function enableDarkmode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  iconElement.textContent = "dark_mode";
}

function disableDarkmode() {
  document.body.classList.remove("darkmode");

  localStorage.setItem("darkmode", null);
  iconElement.textContent = "light_mode";
}
