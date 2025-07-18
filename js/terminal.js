import { getUserConfig, setConfig } from "./config.js";
import { backgroundsName, helpMessages } from "./variables.js";
import printOutput from "./utils/terminal.js";

// Terminal logic 
const terminal = document.querySelector(".terminal");

terminal.addEventListener("click", () => {
  const lastInput = terminal.querySelector("input:last-of-type");
  if (lastInput) lastInput.focus();
});

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
    ].join("\n"), terminal);
  },
  about: () => {
    printOutput([
      "This page was created by Orest",
      "For everyone who loves terminal vibes and vim motions"
    ].join("\n"), terminal);
  },
  whoami: () => {
    printOutput(`${getUserConfig().user}`, terminal);
  },
  background: () => {
    printOutput("Available backgrounds:", terminal);
    printOutput("", terminal);
    printImg();
    printOutput("", terminal);
  },
  love: () => {
    printOutput("I love my Sofiyka");
  },
  set: (args) => {
    if(args.length < 2) {
      printOutput("Usage: set <key> <value>");
      return;
    }

    const [key, ...valuePart] = args;
    const value = valuePart.join(" ");

    setConfig(key, value);

    if (key === "background") {
      document.body.style.backgroundImage = `url(img/${value})`;
    }

    printOutput(`Set ${key} to ${value}`);
  }
}


// Process commands
function processingAnswer(value) {
  const trimmed = value.trim();
  if (trimmed === "") return;

  const [command, ...args] = trimmed.split(/\s+/);

  const handler = commandHandler[command];
  if (handler) {
    handler(args);
  } else {
    printOutput(`Command not found: ${trimmed}`, terminal);
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
      setConfig("background", backgroundsName[i]); 
      document.body.style.backgroundImage = `url(img/${backgroundsName[i]})`;
    });

    container.appendChild(img);
  }

  terminal.appendChild(container);
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

