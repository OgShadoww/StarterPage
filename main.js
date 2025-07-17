// Terminal logic 
const terminal = document.querySelector(".terminal");

const backgroundsName = ["background1.png", "background2.png", "background3.png"];

const commands = [
  "  help        -  Show this message",
  "  clear       -  Clear terminal",
  "  whoami      -  Current user",
  "  about       -  About this project",
  "  background  -  Show backgrounds",
];

function printImg() {
  const container = document.createElement("div");
  container.className = "background-var";

  for(let i = 0; i < backgroundsName.length; i++) {
    let img = document.createElement("img");
    img.className = "terminal-img";
    img.src = `img/${backgroundsName[i]}`;
    img.alt = `${backgroundsName[i]}`;

    img.addEventListener("click", () => {
      console.log("Yeah");
      document.body.style.backgroundImage = `url(img/${backgroundsName[i]})`;
    });

    container.appendChild(img);
  }

  terminal.appendChild(container);
}

function printOutput(text) {
  const outputLine = document.createElement("pre");
  outputLine.className = "terminal-output";
  outputLine.textContent = text;

  terminal.appendChild(outputLine);
}

function processingAnswer(value) {
  const trimmed = value.trim();

  switch (trimmed) {
  case "clear": 
    terminal.innerHTML = "";
    break;

  case "whoami":
    printOutput("user");
    break;

  case "love":
    printOutput("Sofiyka is my love ❤️");
    break;

  case "help":
    printOutput([
      "-----------------------------------",
      "Available commands:",
      ...commands,
      "-----------------------------------",
    ].join("\n"));
    break;

  case "about":
    printOutput([
      "This page was created by Orest",
      "For everyone who loves terminal vibes and vim motions"
    ].join("\n"));
    break;

  case "background":
    printOutput("Available backgrounds:");
    printOutput("\n");
    printImg();
    printOutput("\n");
    break;

  default:
    if (trimmed !== "") {
      printOutput(`Command not found: ${trimmed}`);
    }
  }  
}


function createTerminaLine() {
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

  terminal.addEventListener("click", () => {
    input.focus();   
  });

  input.focus();

  input.addEventListener("keydown", function (e) {
    if(e.key === "Enter") {
      const value = input.value;

      // Processing all commands
      processingAnswer(value);

      // Disable old input
      input.disabled = true;   
      createTerminaLine();
    }
  })
}

createTerminaLine();
