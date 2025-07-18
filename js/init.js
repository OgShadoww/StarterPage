import { createTerminalLine } from "./terminal.js";
import { getUserConfig } from "./config.js";

export function applyConfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = `url(img/${config.bg})`;

  let windows = document.querySelectorAll(".window");
  for(let i = 0; i < windows.length; i++) {
    windows[i].style.background = config.wc;
  }
}

applyConfig();
createTerminalLine();
