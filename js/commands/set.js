import { printOutput } from "../utils/terminal.js";

export default function set(args, terminal) {
  printOutput("This is setting function", terminal);
  printOutput("You can set any configuration of this page", terminal);
  printOutput("Configs:", terminal);
}
