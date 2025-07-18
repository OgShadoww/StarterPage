import { commandsList } from "../variables.js";

function formatCommandHelp(commands) {
  const maxLength = Math.max(...commands.map(el => el.name.length));
  return commands.map(c => `  ${c.name.padEnd(maxLength)}  - ${c.desc}`);
}

export default function help(args, terminal) {
  printOutput([
    "-----------------------------------",
    "Available commands:",
    formatCommandHelp(commandsList),
    "-----------------------------------",
  ].join("\n"), terminal);
}
