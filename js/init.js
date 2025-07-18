import { createTerminalLine } from "./terminal.js";
import { getUserConfig } from "./config.js";

function applyConfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = `url(img/${config.background})`;

  let windows = document.querySelectorAll(".window");
  for(let i = 0; i < windows.length; i++) {
    windows[i].style.background = config.windowColor;
  }
}

applyConfig();
createTerminalLine();
