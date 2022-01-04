const cbs = document.querySelectorAll('input[name="option"]');
let checks = [];
let bool_check = [];
let logros = document.getElementById("logros");
//Check if the localStorage is Empty
if (localStorage.getItem("GoalsCheck")) {
  bool_check = localStorage.getItem("GoalsCheck").split(",");
  console.log(bool_check);
  for (let i = 0; i < bool_check.length; i++) {
    if (bool_check[i] == "true") {
      cbs[i].checked = true;
    }
  }
  logros.textContent =
    "Logros " + contador_logros(bool_check) + "/" + bool_check.length;
} else {
  for (let i = 0; i < cbs.length; i++) {
    bool_check.push("false");
  }
}

cbs.forEach((userItem) => {
  //If click, then add to LocalStorage
  userItem.addEventListener("click", () => {
    for (let i = 0; i < cbs.length; i++) {
      bool_check[i] = cbs[i].checked ? "true" : "false";
      logros.textContent =
        "Logros " + contador_logros(bool_check) + "/" + bool_check.length;
      localStorage.setItem("GoalsCheck", bool_check);
    }
  });
});

//Contador para los logros completados
function contador_logros(bool_check) {
  let contador_logros = 0;
  for (let i = 0; i < bool_check.length; i++) {
    if (bool_check[i] === "true") {
      contador_logros++;
    }
  }
  return contador_logros;
}
