import { getUserConfig, setConfig } from "./config.js";
import { backgroundsName, helpMessages, windowColor } from "./variables.js";

// Terminal logic 
const terminal = document.querySelector(".terminal");

// Terminal commands
const commandHandler = {
  clear: () => {
    terminal.innerHTML = '';
  },
  help: () => {
    printOutput([
      "-----------------------------------",
      "Available commands:",
      ...helpMessages,
      "-----------------------------------",
    ].join("\n"));
  },
  about: () => {
    printOutput([
      "This page was created by Orest",
      "For everyone who loves terminal vibes and vim motions"
    ].join("\n"));
  },
  whoami: () => {
    printOutput(`${getUserConfig().user}`);
  },
  background: () => {
    printOutput("Available backgrounds:");
    printOutput("");
    printImg();
    printOutput("");
  },
  love: () => {
    printOutput("I love my Sofiyka");
  }
}

// Write to terminal img
function printImg() {
  const container = document.createElement("div");
  container.className = "background-var";

  for(let i = 0; i < backgroundsName.length; i++) {
    let img = document.createElement("img");
    img.className = "terminal-img";
    img.src = `img/${backgroundsName[i]}`;
    img.alt = `${backgroundsName[i]}`;

    img.addEventListener("click", () => {
      setConfig("background", `url(img/${backgroundsName[i]})`);
      document.body.style.backgroundImage = `url(img/${backgroundsName[i]})`;
    });

    container.appendChild(img);
  }

  terminal.appendChild(container);
}

// Print answer
function printOutput(text) {
  const outputLine = document.createElement("pre");
  outputLine.className = "terminal-output";
  outputLine.textContent = text;

  terminal.appendChild(outputLine);
}

export function createTerminalLine() {
  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prefix";
  prompt.textContent = "user@ilsg ~ %";

  const input = document.createElement("input");
  input.className = "terminal-input";
  input.type = "text";

  line.appendChild(prompt);
  line.appendChild(input);
  terminal.appendChild(line);

  input.focus();

  input.addEventListener("keydown", function (e) {
    if(e.key === "Enter") {
      const value = input.value;

      // Processing all commands
      processingAnswer(value);

      // Disable old input
      input.disabled = true;   
      createTerminalLine();
      
      // Scroll to bottom
      requestAnimationFrame(() => {
        terminal.scrollTop = terminal.scrollHeight;
      });
    }
  })
}

terminal.addEventListener("click", () => {
  const lastInput = terminal.querySelector("input:last-of-type");
  if (lastInput) lastInput.focus();
});

function processingAnswer(value) {
  const trimmed = value.trim();
  if (trimmed === "") return;

  const handler = commandHandler[trimmed];
  if (handler) {
    handler();
  } else {
    printOutput(`Command not found: ${trimmed}`);
  }
}
