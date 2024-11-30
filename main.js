let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          const result = new Function("return " + display.innerText)();
          display.innerText = result;
        } catch (error) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        if (display.innerText !== "0") {
          display.innerText = display.innerText.startsWith("-")
            ? display.innerText.slice(1)
            : "-" + display.innerText;
        }
        break;
      case "%":
        try {
          const result = new Function(
            "return " + display.innerText + " / 100"
          )();
          display.innerText = result;
        } catch (error) {
          display.innerText = "Error!";
        }
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
