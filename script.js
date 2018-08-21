let escada = prompt("Digite quantos degraus deseja desenhar:");
let simbolo = prompt("Digite o simbolo que queira como degrau:");
let i = 0;

if(isNaN(Number(escada)) || escada === null){
    alert("Valor inválido");
}
else{
	alert("Vamos lá!");
}


  while(i <= escada){
    i++;
    console.log(simbolo.repeat(i));
  }
