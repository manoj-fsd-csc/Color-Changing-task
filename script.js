const circle = document.getElementById("circle");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");  
    circle.style.backgroundColor = color;  
  });
});
colorInput.addEventListener("input", () => {
    const color = colorInput.value.trim();  
    circle.style.backgroundColor = color;  
  });
  