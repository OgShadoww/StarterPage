import { createTerminaLine } from "./terminal.js";
import { getUserConfig } from "./config.js";

function applyConfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = config.background;
  let windows = document.querySelectorAll(".window");
  for(let i = 0; i < windows.length; i++) {
    console.log(windows[i]);
    windows[i].style.backgroundColor = config.windowColor;
  }
}

applyConfig();
createTerminaLine();
