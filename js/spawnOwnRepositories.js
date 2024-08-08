var links = [
  "ykyyykk/BootstrapTutorial",
  "ykyyykk/WebTutorial",
  "ykyyykk/JavaScriptTutorial",
  "ykyyykk/Portfolio",
  "ykyyykk/FakeGithub",
  "ykyyykk/CSharpTutorial",
  "ykyyykk/AnimeJSTutorial",
  "louise-bwsx/TeamProject",
  "ykyyykk/FakeYahooBootstrap",
];

window.addEventListener("DOMContentLoaded", () => {
  var repositories_container = document.getElementById(
    "repositories_container"
  );

  for (let i = 0; i < links.length; i++) {
    repositories_container.innerHTML += `
            <div class="own_repositories_item">
            <a href="#"
              ><img
                class="repositories_avatar"
                src="image/repositories_avatar.png"
                alt=""
            /></a>
            <a class="repositories_link" href="#"> ${links[i]} </a>
          </div>`;
  }
  console.log(links.length);
});
