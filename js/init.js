import { createTerminalLine } from "./terminal/terminal.js";
import { createWidgetLine } from "./widget/widget.js";
import { getUserConfig } from "./config.js";

export function applyConfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = `url(img/backgrounds/${config.bg})`;

  let windows = document.querySelectorAll(".window");
  for(let i = 0; i < windows.length; i++) {
    windows[i].style.background = config.wc;
  }
}

applyConfig();
createTerminalLine();
createWidgetLine();
