// Print answer
export default function printOutput(text, terminal) {
  const outputLine = document.createElement("pre");
  outputLine.className = "terminal-output";
  outputLine.textContent = text;

  terminal.appendChild(outputLine);
}


