import { backgroundsName } from "../variables.js";

let history = [];
let historyIndex = -1;

// Print answer
export function printOutput(text, terminal) {
  const outputLine = document.createElement("pre");
  outputLine.className = "terminal-output";
  outputLine.textContent = text;

  terminal.appendChild(outputLine);
}

// Write to terminal img
export function printImg(terminal) {
  const container = document.createElement("div");
  container.className = "background-var";

  for(let i = 0; i < backgroundsName.length; i++) {
    let imgContainer = document.createElement("div");
    imgContainer.classList = "img-container" ;

    let imgName = document.createElement("span");
    imgName.textContent = backgroundsName[i];

    let img = document.createElement("img");
    img.className = "terminal-img";
    img.src = `img/backgrounds/${backgroundsName[i]}`;
    img.alt = `${backgroundsName[i]}`;

    imgContainer.appendChild(img);
    imgContainer.appendChild(imgName);
    container.appendChild(imgContainer);
  }

  terminal.appendChild(container);
}

export function addToHistory(command) {
  if(!command.trim()) return;
  history.push(command);
  historyIndex = history.length;
}

export function getPrevCommand() {
  if(historyIndex > 0) {
    historyIndex--;
    return history[historyIndex];
  }

  return null;
}

export function getNextCommand() {
  if(historyIndex < history.length - 1) {
    historyIndex += 1;
    return history[historyIndex];
  } 
  else {
    historyIndex = history.length;
    return "";
  }
}
