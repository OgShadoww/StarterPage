

export default function help(terminal) {
  printOutput([
    "-----------------------------------",
    "Available commands:",
    ...helpMessages,
    "-----------------------------------",
  ].join("\n"), terminal);
}
