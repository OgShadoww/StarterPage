import { printOutput } from "../utils/terminal.js";

export default function data(args, terminal) {
  const now = new Date().toLocaleString();
  const output = `📅 ${now}`;

  printOutput(output, terminal);
}
