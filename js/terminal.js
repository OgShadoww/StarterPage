import { commandHandler } from "./commands/commandMap.js";
import { getUserConfig } from "./config.js";
import { printOutput, addToHistory, getNextCommand, getPrevCommand } from "./utils/terminal.js"; 

// Terminal logic 
const terminal = document.querySelector(".terminal");
let firstTime = true;

// Add focus if click on terminal
terminal.addEventListener("click", () => {
  const lastInput = terminal.querySelector("input:not(:disabled):last-of-type");
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
  if(firstTime) {
    printOutput("Write help to see commands", terminal);
    firstTime = false;
  }

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
      addToHistory(value);

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
    if (e.key === "ArrowUp") {
      const prev = getPrevCommand();
      if (prev != null) {
        input.value = prev;

        input.focus();
        requestAnimationFrame(() => {
          input.setSelectionRange(input.value.length, input.value.length);
        });
      }
    }
    if (e.key === "ArrowDown") {
      const next = getNextCommand();
      input.value = next;

      input.focus();
      requestAnimationFrame(() => {
        input.setSelectionRange(input.value.length, input.value.length);
      });
    }  
  })
}










