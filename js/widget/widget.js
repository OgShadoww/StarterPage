const widget = document.querySelector(".widget");
const widgetContent = document.querySelector(".widget-content");
const widgetInput = document.querySelector(".widget .terminal-input");

export function createWidgetLine() {  
  const widgetPref = document.createElement("span");
  widgetPref.classList = "terminal-prefix";
  widgetPref.textContent = ">>";

  const widgetInput = document.createElement("input");
  widgetInput.classList = "terminal-input";

  widgetContent.appendChild(widgetPref);
  widgetContent.appendChild(widgetInput);
}

widget.addEventListener("click", () => {
  widgetInput.focus();
});

widgetInput.addEventListener("keydown", e => {
  if(e.key === "Enter") {
    const value = widgetInput.value;
  }
})
