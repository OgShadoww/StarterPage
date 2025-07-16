// Terminal logic 
const terminal = document.querySelector(".terminal");

const commands = [
  "clear        -      screen",
  
];

function printOutput(text) {
  const outputLine = document.createElement("pre");
  outputLine.className = "terminal-output";
  outputLine.textContent = text;

  terminal.appendChild(outputLine);
}

function processingAnswer(value) {
  const treamed = value.trim();

  switch (treamed) {
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
        "  help        - Show this message",
        "  clear       - Clear terminal",
        "  whoami      - Current user",
        "  about       - About this project",
        "-----------------------------------",
      ].join("\n"));
      break;

    case "about":
      printOutput([
        "This page was created by Orest",
        "For everyone who loves terminal vibes and vim motions"
      ].join("\n"));
      break;     
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
