import { printImg, printOutput } from "../utils/terminal.js";

export default function bg(args, terminal) {
  printOutput("\n", terminal);
  printImg(terminal); 
  printOutput("\n", terminal);
}
