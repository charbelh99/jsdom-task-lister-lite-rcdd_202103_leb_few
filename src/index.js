document.addEventListener("DOMContentLoaded", () => {
  
let button = document.querySelector("form");
button.addEventListener("submit", append);
function append(e) {
  let cal = document.getElementById("deadLine").value;
  let toDo = document.getElementById("toDo").value;
  let li = document.createElement("li");
  let dis = toDo + " " + cal;
  li.innerHTML = dis;
  ul.appendChild(li);
  let resetForm = document.getElementById("form1");
  resetForm.reset();
  e.preventDefault();
}
  
  
  
});
