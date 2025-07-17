import { createTerminaLine } from "./terminal.js";
import { getUserConfig } from "./config.js";

function applyConfig() {
  const config = getUserConfig();

  document.body.style.backgroundImage = config.background;
}

applyConfig();
createTerminaLine();
