

$(function() {

  function CargarTODOmenu(){
    return $.ajax({
      url: 'http://ipm.esy.es/public/menu',
      type: 'GET',
      dataType: 'json'
    });
  };





  ViewModel = function(){
    var _self = this;

    _self.menu_producto = ko.observableArray([]);
    _self.producto_pedido = ko.observableArray([]);


    _self.CargarCategoriaComida = function(){
        CargarTODOmenu().done(function(res){
          if(res.error){
            console.log(res.msg);
            return false;
          }
          //localStorage.setItem("id_comida", res.datos.ID);
          //localStorage.setItem("Categoria", res.datos.Categoria);
          //localStorage.setItem("Categoria", res.datos.ID);
          //NO SE QUE ONDA CON LA DISPONIBILIDAD DEBERIA SER VALIDADO EN EL API
          _self.menu_producto(res.datos);
        });
    }

    _self.AgregarPedido = function(datos){
      var temp=[];
      if(data.Categoria=="rico")
        temp[0]=data;
      if(data.Categoria=="masriko")
        temp[1]=data;
      if(data.Categoria=="sabrosos")
        temp[2]=data;
      _self.producto_pedido(temp);
    }







  };


  var VM = new ViewModel()
  ko.applyBindings(VM);
});



var pedido1 = document.getElementById("pedido1");

pedido1.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 1";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("3 Tostadas");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("1 Coca-Cola 600ml");
      ul.appendChild(li2);
      li2.appendChild(txtli2);

      var li3 = document.createElement("li");
     li3.classList.add("list-group-item");
     var txtli3 = document.createTextNode("1 Ruffles");
      ul.appendChild(li3);
      li3.appendChild(txtli3);



     var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

     var li4 = document.createElement("li");
     li4.classList.add("list-group-item");
     var txtli4 = document.createTextNode("Deshebrada");
      ul2.appendChild(li4);
      li4.appendChild(txtli4);

      var li5 = document.createElement("li");
     li5.classList.add("list-group-item");
     var txtli5 = document.createTextNode("Salsa Verde");
      ul2.appendChild(li5);
      li5.appendChild(txtli5);

      var li6 = document.createElement("li");
     li6.classList.add("list-group-item");
     var txtli6 = document.createTextNode("Cochinita Pibil");
      ul2.appendChild(li6);
      li6.appendChild(txtli6);

}


var pedido2 = document.getElementById("pedido2");

pedido2.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 2";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("2 Flautas");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("1 Arizona");
      ul.appendChild(li2);
      li2.appendChild(txtli2);

      var li3 = document.createElement("li");
     li3.classList.add("list-group-item");
     var txtli3 = document.createTextNode("1 Chokies");
      ul.appendChild(li3);
      li3.appendChild(txtli3);


      var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

     var li4 = document.createElement("li");
     li4.classList.add("list-group-item");
     var txtli4 = document.createTextNode("Mole");
      ul2.appendChild(li4);
      li4.appendChild(txtli4);

}


var pedido3 = document.getElementById("pedido3");

pedido3.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 3";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("4 Flautas");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("1 Fanta de Naranja");
      ul.appendChild(li2);
      li2.appendChild(txtli2);

      var li3 = document.createElement("li");
     li3.classList.add("list-group-item");
     var txtli3 = document.createTextNode("3 Mazapanes");
      ul.appendChild(li3);
      li3.appendChild(txtli3);


      var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

     var li4 = document.createElement("li");
     li4.classList.add("list-group-item");
     var txtli4 = document.createTextNode("Huevo con Chile");
      ul2.appendChild(li4);
      li4.appendChild(txtli4);

      var li5 = document.createElement("li");
     li5.classList.add("list-group-item");
     var txtli5 = document.createTextNode("Picadillo");
      ul2.appendChild(li5);
      li5.appendChild(txtli5);

      var li6 = document.createElement("li");
     li6.classList.add("list-group-item");
     var txtli6 = document.createTextNode("Bistec");
      ul2.appendChild(li6);
      li6.appendChild(txtli6);

       var li7 = document.createElement("li");
     li7.classList.add("list-group-item");
     var txtli7 = document.createTextNode("Nopales");
      ul2.appendChild(li7);
      li7.appendChild(txtli7);

}


var pedido4 = document.getElementById("pedido4");

pedido4.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 4";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("2 Burritos y 1 Hamburguesa");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("2 Coca-Cola 600ml");
      ul.appendChild(li2);
      li2.appendChild(txtli2);

      var li3 = document.createElement("li");
     li3.classList.add("list-group-item");
     var txtli3 = document.createTextNode("1 Emperador y 1 Elote");
      ul.appendChild(li3);
      li3.appendChild(txtli3);


      var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

}


var pedido5 = document.getElementById("pedido5");

pedido5.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 5";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("2 Gorditas y 3 Flautas");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("1 Agua de Limón");
      ul.appendChild(li2);
      li2.appendChild(txtli2);

      var li3 = document.createElement("li");
     li3.classList.add("list-group-item");
     var txtli3 = document.createTextNode("1 Doritos y 1 Emperador");
      ul.appendChild(li3);
      li3.appendChild(txtli3);


      var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

     var li4 = document.createElement("li");
     li4.classList.add("list-group-item");
     var txtli4 = document.createTextNode("Chicharrón");
      ul2.appendChild(li4);
      li4.appendChild(txtli4);

}


var pedido6 = document.getElementById("pedido6");

pedido6.onclick = function(){
	var h4 = document.getElementById("pedido").innerHTML="Pedido 6";
	var ul = document.getElementById("pedidos");

	 while (ul.firstChild) {
       	ul.removeChild(ul.firstChild);
        }

     var li = document.createElement("li");
     li.classList.add("list-group-item");
     var txtli = document.createTextNode("2 Flautas y 1 Burrito");
      ul.appendChild(li);
      li.appendChild(txtli);

      var li2 = document.createElement("li");
     li2.classList.add("list-group-item");
     var txtli2 = document.createTextNode("1 Agua");
      ul.appendChild(li2);
      li2.appendChild(txtli2);


      var ul2 = document.getElementById("ingredientes");

     while (ul2.firstChild) {
       	ul2.removeChild(ul2.firstChild);
        }

     var li4 = document.createElement("li");
     li4.classList.add("list-group-item");
     var txtli4 = document.createTextNode("Bistec");
      ul2.appendChild(li4);
      li4.appendChild(txtli4);

      var li5 = document.createElement("li");
     li5.classList.add("list-group-item");
     var txtli5 = document.createTextNode("Picadillo");
      ul2.appendChild(li5);
      li5.appendChild(txtli5);

}

