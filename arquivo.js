window.alert('Boas-vindas, amigo!');



var nome = prompt("Antes de mais nada, poderia nos dizer o seu nome?");
nome === ""? alert("Tudo bem! Não precisa responder se não quiser!"): alert("Seja muito bem-vindo, " + nome + "!");
alert("Infelizmente, o site está passando por uma reconstrução do código fonte devido a erros constantes. O site esquecerá seu nome e sua experiência pode ser de nível inferior...");
alert("Faremos o possível para que você possa realizar ações simples até o site ser reformado =)");
alert("Vejo você mais tarde, " + nome + " =)");
var senha = prompt("Qual é a senha?");
if(senha == "TonyRamos") {
    window.location = "secret.html";
}