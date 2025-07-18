import printOutput from "../utils/terminal";

export default function about(terminal) {
  printOutput([
    "This page was created by Orest",
    "For everyone who loves terminal vibes and vim motions"
  ].join("\n"), terminal);
}
