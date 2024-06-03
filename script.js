let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle("menu-fechado")

    // Se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    } else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"

    }
}

// if (window.innerWidth < 1300) {
//     menu.classList.add("menu-fechado")
//     iconeBarras.style.display = "inline"
//     iconeX.style.display = "none"
// }

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}


function solicitarOrcamento(event) {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value
    let valorServico = document.getElementById("campo-servico").value
    let valorDescricao = document.getElementById("campo-texto").value


    
    let dadosForm = {
        nome: valorNome, 
        email: valorEmail,
        telefone: valorTelefone,
        servico: valorServico,
        descricao: valorDescricao
    }

    console.log(dadosForm)

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

    .then(resposta => {
        console.log(resposta);
       
        document. querySelector("#contato form").reset()

        alert("Solicitacao enviada com sucesso!!!")
    })

    .catch(erro => {
        console.log(erro);
        alert("Erro na requisicao!")
    })

    event.preventDefault()
}
