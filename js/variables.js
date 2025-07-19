// Terminal variables
export const backgroundsName = ["bg1.png", "bg2.png", "bg3.png", "bg4.png"];

export const commandsList = [
  { name: "help", desc: "Show all commands"},
  { name: "clear", desc: "Clear terminal"},
  { name: "whoami", desc: "Current user" },
  { name: "about", desc: "About this project" },
  { name: "bg", desc: "Show backgrounds" },
  { name: "echo", desc: "Repeat by user" },
  { name: "date", desc: "Show current date" },
  { name: "set", desc: "Change configuration" },
  { name: "reset", desc: "Reset configuration to default" },
];

export const availableConfigs = [
  {
    key: "bg",
    values: backgroundsName,
    desc: "Sets background image"
  },
  {
    key: "user",
    desc: "Sets user name"
  },

  {
    key: "wc",
    desc: "Sets window background color"
  }
];

