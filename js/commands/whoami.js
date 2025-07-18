import { printOutput } from "../utils/terminal.js";
import { getUserConfig } from "../config.js";

export default function whoami(args, terminal) {
  printOutput(getUserConfig().user, terminal);
}
