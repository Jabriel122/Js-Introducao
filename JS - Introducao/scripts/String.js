function nomear(){
    event.preventDefault(); //para o submit od formulario

    let nickname = document.getElementById('nickname').value;

    document.getElementById('result').innerText = `Olá, ${nickname} `; 
    
}