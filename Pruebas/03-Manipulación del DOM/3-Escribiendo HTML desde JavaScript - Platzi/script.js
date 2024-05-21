const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

//al contrario del GetElementBy con query selector es necesario poner el # y el . para los ID y clases 


console.log(h1);

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})


h1.innerHTML = "Como tan muchachos <br> Yo los veo muy bien";
h1.innerText  = "Como tan muchachos <br> Yo los veo muy bien";
//h1.getAttribute
//h1.setAttribute


console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));

//h1.setAttribute("class", "rojo")
//console.log(h1.getAttribute('class'));

h1.classList.add('rojo');
h1.classList.remove('verde');  
//h1.classList.toggle('verde');  
//h1.classList.contains('verde');  

input.value = "adios"

input.placeholder = "kkkkkkkkkkk"

//console.log(document.createElement("img"));


const imagen  = document.createElement('img');
imagen.setAttribute('src', 'https://exclusivapets.files.wordpress.com/2013/09/persa-gris1-e1378827665983.jpg');

console.log(imagen);


pid.innerHTML = "";
pid.append(imagen);