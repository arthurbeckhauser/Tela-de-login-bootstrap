function logar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if(usuario === "" || senha === ""){
        mensagem.innerHTML = "Preencha todos os campos!";
    }

    else if(usuario !== usuarioCorreto || senha !== senhaCorreta){
        mensagem.innerHTML = "Usuário ou senha incorretos!";
    }

    else{
        window.location.href = "home.html";
    }
}