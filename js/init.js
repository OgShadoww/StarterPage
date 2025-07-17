import { createTerminalLine } from "./terminal.js";
import { getUserConfig } from "./config.js";

function applyconfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = config.background;

  let windows = document.querySelectorAll(".window");
  for(let i = 0; i < windows.length; i++) {
    console.log(windows[i]);
    windows[i].style.background = config.windowcolor;
  }
}

applyconfig();
createTerminalLine();
