export const DEFAULT_CONFIG = {
  user: "user",
  background: "background2.png",
}

if(!localStorage.getItem("userConfig")) {
  localStorage.setItem("userConfig", JSON.stringify(DEFAULT_CONFIG));
}

export function getUserConfig() {
  return JSON.parse(localStorage.getItem("userConfig"));
}

export function setConfig(key, value) {
  const config = getUserConfig();
  config[key] = value;
  localStorage.setItem("userConfig", JSON.stringify(config));
}
