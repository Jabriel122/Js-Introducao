function calcular(){

    event.preventDefault(); //para o submit od formulario
    //criar uma variavel para cada número
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado; //undefined

    if(isNaN(n1) || isNaN(n2)){
        alert("É necessário digitr apenas números");
        return;
    }

    if(op == '+'){
        resultado = somar(n1, n2);
    } else if (op == '-'){
        resultado = subtrair(n1, n2);
    }else if(op == '/'){
        resultado = divisao(n1,n2);
    }else if(op == '*'){
        resultado = multiplicação(n1,n2);
    }else{
        return 'Operação inválida';
    }

    //inserir o resultado no HTML(DOM)
    //Usamos o innerTex para gerar um texto que via ser o mesmo numero gerado por resultado
    document.getElementById('result').innerText = resultado

    //criar uma variavel para o resultado da soma
    ///const resultado = subtrair(n1, n2);

    //exibir resultado em uma alert - utilizar interpolação

}

function subtrair(x, y){
    return x - y;
}

function somar(x, y){
    return parseFloat(x) + parseFloat(y);
}

function subtrair(x, y){
   
    return x - y;
}
function multiplicação(x,y){
    return x * y;
}

function divisao(x,y){
    if( y == 0){
        return "Não é um númro"
    }
    return x/y;
}
