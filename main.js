// Terminal logic 
const terminal = document.querySelector(".terminal");


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
      processingAnswer(value, );      

      // Disable old input
      input.disabled = true;   
      createTerminaLine();
    }
  })
}

function processingAnswer(value) {
  if(value === "clear") {
    terminal.innerHTML = "";
  }
  if(value === "whoami") {
    const answer = document.createElement("span");
    answer.classList = "terminal-prefix"; 
    answer.textContent = "user";
        
    terminal.appendChild(answer);
  }
  if(value === "help") {

  }
  if(value === "love") {
    const answer = document.createElement("span");
    answer.classList = "terminal-prefix"; 
    answer.textContent = "Sofiyka is my love";
        
    terminal.appendChild(answer);

  }
}

createTerminaLine();
