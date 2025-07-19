import { applyConfig } from "./init.js";

export const DEFAULT_CONFIG = {
  user: "user",
  bg: "bg2.png",
  wc: "#27243A",
}

if(!localStorage.getItem("userConfig")) {
  localStorage.setItem("userConfig", JSON.stringify(DEFAULT_CONFIG));
}

export function getUserConfig() {
  try {
    return JSON.parse(localStorage.getItem("userConfig"));
  } 
  catch {
    return DEFAULT_CONFIG;
  }
}

export function resetConfig() {
  localStorage.setItem("userConfig", JSON.stringify(DEFAULT_CONFIG));
  applyConfig();
}

export function setConfig(key, value) {
  const config = getUserConfig();
  config[key] = value;
  localStorage.setItem("userConfig", JSON.stringify(config));

  applyConfig();
}
