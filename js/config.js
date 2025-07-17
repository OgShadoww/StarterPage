export const DEFAULT_CONFIG = {
  user: "user",
  background: "background2.png",
  windowColor: "#27243A",
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

export function setConfig(key, value) {
  const config = getUserConfig();
  config[key] = value;
  localStorage.setItem("userConfig", JSON.stringify(config));
}
