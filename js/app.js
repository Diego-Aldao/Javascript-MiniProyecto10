(function () {
  const botones = document.querySelectorAll(".botones");
  const igual = document.querySelector(".igual");
  const clear = document.querySelector(".clear");
  const resultado = document.querySelector(".resultado");

  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      let valor = e.target.dataset.item;
      resultado.value += valor;
    });
  }); //Guardar en una variable cada boton apretado y pasarlo al input resultado

  igual.addEventListener("click", () => {
    let respuesta = eval(resultado.value);
    resultado.value = respuesta.toFixed(5);
  }); //con el metodo eval() realizamos la operacion que se encuentra en el input, y con el metodo toFixed() forzamos a que el resultado no supere los 5 digitos decimales

  clear.addEventListener("click", () => {
    resultado.value = "";
  }); //limpiar el input
})();
