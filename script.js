const btn = document.querySelector("#send");
//var teste = document.querySelectorAll(".divs");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    //const classe = document.querySelector("dia" );

   // const valor = Number(classe.value);

   var teste = document.querySelectorAll(".divs ").innerHTML = (teste);

    //document.getElementsByTagName("span").innerHTML= (valor);
    console.log(teste)

})

function limpar(){
    document.getElementById("dia").value = "";
    document.getElementById("dia").innerHTML = "Deus";
}