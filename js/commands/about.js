import { printOutput } from "../utils/terminal.js";

export default function about(args, terminal) {
  printOutput([
    "This page was created by Orest",
    "For everyone who loves terminal vibes and vim motions"
  ].join("\n"), terminal);
}
