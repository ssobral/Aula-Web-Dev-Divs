/*criando a função calc */
function calc() {
    /*declarando as variáveis */
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`DADOS INFORMADOS: ${n1} e ${n2}. \nESCOLHA UMA OPÇÃO? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let msg = document.getElementById('msg')
    /*passando o resultado para a página com innerhtml usando tampleit string */
    msg.innerHTML = `<h2>Resultado...</h2>`

    /* criando o switch e passando op*/
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            // usando o template `` de strings e fazendo a interpolação de strings {}  
            msg.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:
            msg.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            msg.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            msg.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
            break
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            msg.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}</p>`
            break
    }
}

/*criando a função validar */
function validar(){
		
    /* declarando as variáveis*/
	let usuario =document.getElementById("usuario").value
	let senha = document.getElementById("senha").value
		
    
    /*fazendo  if e else para validar os campos */
    if(usuario =="" && senha ==""){
		alert('preencha os campos')
	}else{
		alert('Acesso Permitido')
        /*chamando a página menu.html */
        window.open('menu.html');
		}
}
