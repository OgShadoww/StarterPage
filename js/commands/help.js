import { commandsList } from "../variables.js";
import { printOutput } from "../utils/terminal.js";

function formatCommandHelp(commands) {
  const maxLength = Math.max(...commands.map(el => el.name.length));
  return commands
    .map(c => `  ${c.name.padEnd(maxLength)}  - ${c.desc}`)
    .join("\n"); // <--- оце важливо
}

export default function help(args, terminal) {
  const output = [
    "-----------------------------------",
    "Available commands:",
    formatCommandHelp(commandsList),
    "-----------------------------------",
  ].join("\n");

  printOutput(output, terminal);
}
