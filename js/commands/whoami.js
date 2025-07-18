import printOutput from "../utils/terminal";
import { getUserConfig } from "../config";

export default function whoami(args, terminal) {
  printOutput(getUserConfig().name, terminal);
}
