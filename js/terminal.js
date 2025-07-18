import { commandHandler } from "./commands/commandMap.js";
import { getUserConfig } from "./config.js";
import { printOutput } from "./utils/terminal.js"; 

// Terminal logic 
const terminal = document.querySelector(".terminal");

// Add focus if click on terminal
terminal.addEventListener("click", () => {
  const lastInput = terminal.querySelector("input:last-of-type");
  if (lastInput) lastInput.focus();
});

// Process commands
function processingAnswer(value) {
  const trimmed = value.trim();
  if (trimmed === "") return;

  const [command, ...args] = trimmed.split(/\s+/);

  const handler = commandHandler[command];
  if (handler) {
    handler(args, terminal);
  } else {
    printOutput(`Command not found: ${trimmed}`, terminal);
  }
}

// Creating new input line
export function createTerminalLine() {
  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prefix";
  prompt.textContent = `${getUserConfig().user}@ilsg ~ %`;

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
