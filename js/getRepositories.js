var imgs = { star: "./image/star.png" };
var titles = ["kovidgoyal / kitty"];
var descriptions = ["Cross-platform, fast, feature-rich, GPU based terminal"];
var starcount = [123456];
window.onload = () => {
  console.log("window.onload");
  setRepositories(trending_repositories_container);
  setRepositories(explore_repositories_container);
};

function setRepositories(container) {
  console.log(`container: ${container}`);
  container.innerHTML += `
      <div class="repositories_item">
    <div class="repositories_top">
      <img
        class="repositories_avatar"
        src="image/repositories_avatar.png"
        alt=""
      />
      <a class="repositories_title_link" href="">${titles[0]}</a>
      <button class="repositories_stared"><img src="image/star.png" alt=""></button>
    </div>

    <div class="repositories_middle">${descriptions[0]}</div>

    <div class="repositories_bottom">
      <img class="script_type" src="" alt="">
      <div>scriptType</div>
      <img class="star_count"src="${imgs["star"]}" alt=""></img>
      <div>${starcount[0]}</div>
    </div>
  </div>`;
}
