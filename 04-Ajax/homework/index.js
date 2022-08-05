var borrar = () => {
  //
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: () => {
      $("#success").text(`amigo numero${id} borrado con exito`);
      getAmigos();
    },
  });
};

var getAmigos = () => {
  var lista = $("#lista");
  lista.empty();

  $.get("http://localhost:5000/amigos", (res) => {
    for (let i = 0; i < res.length; i++) {
      let btn = `<button onclick = "borrar(${res[i].id})" >X</button>`;
      lista.append(`<li>${res[i].name} ${btn}</li>`);
    }
  });
};
$("#boton").click(getAmigos);
$("#search").click(() => {
  var id = $("#input").val(); //getElementById('input').value
  $.get(`http://localhost:5000/amigos/${id}`, (res) => {
    $("#amigo").text(res.name);
    //getElementById('amigo').innerHTML = res.name
  });
});
$("#delete").click(() => {
  var id = $("#inputDelete").val();
  delt(id);
});
