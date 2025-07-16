// Terminal logic 
const terminal = document.querySelector(".terminal");

console.log(terminal);

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

  input.focus();

  input.addEventListener("keydown", function (e) {
    if(e.key === "Enter") {
      console.log("YEAH");
      const value = input.value;

      // Disable old input
      input.disabled = true;
    
      createTerminaLine();
    }
  })
}

createTerminaLine();
