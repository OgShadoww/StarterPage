import { printOutput } from "../utils/terminal.js";
import { setConfig } from "../../config.js";
import { availableConfigs } from "../../variables.js";

export default function set(args, terminal) {
  if(args < 2) {
    printOutput("You can set the following configurations:", terminal);
    printOutput("\n", terminal);
    availableConfigs.forEach(c => {
      printOutput(`${c.key} — ${c.desc}`, terminal);
    });
    printOutput("\n", terminal);
    return;
  }
  
  const [key, ...valuePart] = args;
  const value = valuePart.join("");

  const config = availableConfigs.find(c => c.key === key);

  if(!config) {
    printOutput(`❌ Unknown config key: ${key}`, terminal);
    return;
  }
  
  const validValue = availableConfigs.map(c => c.values);
  if (Array.isArray(config.values) && !config.values.includes(value)) {
    printOutput(`There is no '${value}', choose from these:\n`, terminal);
    config.values.forEach(v => printOutput(`  ${v}`, terminal));
    return;
  } 
  
  setConfig(key, value);
}
