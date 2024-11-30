// Seleção de elementos //
const container = document.querySelector(".container");

const btnIncluir = document.getElementById("btnIncluir");
const btnLimpar = document.getElementById("btnLimpar");
var lista = document.getElementById("nomes")
var inputHE = document.getElementById("edit_HE");
var inputHS = document.getElementById("edit_HS");
var inputHE2 = document.getElementById("edit_HE2");
var inputHS2 = document.getElementById("edit_HS2");
var placaPesquisa = document.getElementById("formInputPlaca");
var controle=0;

var arrVeiculos = [];

//funcoes//
//EDITAR MOTORISTA//
function editaMotorista(valor){

    var arrRegistro = JSON.parse(localStorage.getItem("dbVeiculos"));

    arrRegistro.map( ( elemento ) => {

        if ( arrRegistro.indexOf(elemento) == valor ){

            var placa = document.getElementById("inputPlaca");
            var motorista = document.getElementById("inputNomeMotorista");
            var cpf = document.getElementById("inputCpf")
            var notaFiscal = document.getElementById("inputNf");
            var hora1 = document.getElementById("HE1");
            var hora2 = document.getElementById("HS1");
            var hora3 = document.getElementById("HE2");
            var hora4 = document.getElementById("HS2");
            var modelo = document.getElementById("modelo");
            var operacao = document.getElementById("operacao");
            var observacao = document.getElementById("textareaObs");

            return ( placa.value = elemento.placa,
                     motorista.value = elemento.motorista,
                     cpf.value = elemento.cpf,
                     notaFiscal.value = elemento.notaFiscal,
                     hora1.value = elemento.hora1,
                     hora2.value = elemento.hora2,
                     hora3.value = elemento.hora3,
                     hora4.value = elemento.hora4,
                     modelo.value = elemento.modelo,
                     operacao.value = elemento.operacao,
                     observacao.value = elemento.observacao,

                     window.scrollTo(0,0)

                    )

        };

    } )

}

//PAGINA CADASTRAR
function paginaCadastrar(){
    location.href = "cadastrar.html";
}

//EDITAR MOTORISTA//
function editarRegistro(){

    /*LIMPAR*/
    var placaLimpa = document.getElementById("inputPlaca");
    var motoristaLimpa = document.getElementById("inputNomeMotorista");
    var cpfLimpa = document.getElementById("inputCpf")
    var notaFiscalLimpa = document.getElementById("inputNf");
    var he1 = document.getElementById("HE1");
    var hs1 = document.getElementById("HS1");
    var he2 = document.getElementById("HE2");
    var hs2 = document.getElementById("HS2");
    var modelo = document.getElementById("modelo");
    var operacao = document.getElementById("operacao");
    var obs = document.getElementById("textareaObs");

    //Verifica LocalStorage nao existe
    if(localStorage.hasOwnProperty("dbVeiculos")){

        //buscando do localStorage
        arrVeiculos = JSON.parse(localStorage.getItem("dbVeiculos"));
        
    }else{

        //Criando um objeto no localStorage
        localStorage.dbVeiculos = [];
        
    }

    arrVeiculos.map( (p) => {

        if(p.placa.includes(placaLimpa.value)){
            return ( p.placa = placaLimpa.value,
                     p.motorista = motoristaLimpa.value,
                     p.cpf = cpfLimpa.value,
                     p.notaFiscal = notaFiscalLimpa.value,
                     p.hora1 = he1.value,
                     p.hora2 = hs1.value,
                     p.hora3 = he2.value,
                     p.hora4 = hs2.value,
                     p.modelo = modelo.value,
                     p.operacao = operacao.value,
                     p.observacao = obs.value

                    );

        }   
                
    });

    localStorage.setItem("dbVeiculos", JSON.stringify(arrVeiculos));

    alert("Registro Atualizado Com Sucesso ! ! !");

    limpaFormulario();

}

//EXCLUIR REGISTRO//
function excluirRegistro(vlr){

    /*LIMPAR*/
    var placaLimpa = document.getElementById("inputPlaca");
    var motoristaLimpa = document.getElementById("inputNomeMotorista");
    var cpfLimpa = document.getElementById("inputCpf")
    var notaFiscalLimpa = document.getElementById("inputNf");

    //Verifica LocalStorage nao existe
    if(localStorage.hasOwnProperty("dbVeiculos")){

        //buscando do localStorage
        arrVeiculos = JSON.parse(localStorage.getItem("dbVeiculos"));
        
    }else{

        //Criando um objeto no localStorage
        localStorage.dbVeiculos = [];
        
    }

    var novoArrVeiculos = [];

    arrVeiculos.map( (p) => {

        if(arrVeiculos.indexOf(p) == vlr){

        }else{
            novoArrVeiculos.push(p);
        }
                
    });

    localStorage.setItem("dbVeiculos", JSON.stringify(novoArrVeiculos));

    alert("Registro Ativo Excluído Com Sucesso ! ! !");

    limpaFormulario();

}
//LIMPAR//
function limpaFormulario(){

    /*LIMPAR*/
    var placaLimpa = document.getElementById("inputPlaca");
    var motoristaLimpa = document.getElementById("inputNomeMotorista");
    var cpfLimpa = document.getElementById("inputCpf")
    var notaFiscalLimpa = document.getElementById("inputNf");
    var he1 = document.getElementById("HE1");
    var hs1 = document.getElementById("HS1");
    var he2 = document.getElementById("HE2");
    var hs2 = document.getElementById("HS2");
    var modelo = document.getElementById("modelo");
    var operacao = document.getElementById("operacao");
    var obs = document.getElementById("textareaObs");

    placaLimpa.value = "";
    motoristaLimpa.value = "";
    cpfLimpa.value = "";
    notaFiscalLimpa.value = "";
    placaPesquisa.value = "";
    he1.value = "";
    hs1.value = "";
    he2.value = "";
    hs2.value = "";
    modelo.value = "";
    operacao.value = "";
    obs.value = "";

    /*CARREGANDO REGISTROS*/
    carregaLista();

}
//CARREGAR//
function carregaLista(){

    //Verifica LocalStorage nao existe
    if(localStorage.hasOwnProperty("dbVeiculos")){

        //buscando do localStorage
        arrVeiculos = JSON.parse(localStorage.getItem("dbVeiculos"));
        
    }else{

        //Criando um objeto no localStorage
        localStorage.dbVeiculos = [];
        
    }

    //lista.insertAdjacentHTML("beforeend", "Moacir");
    lista.textContent = "";

    arrVeiculos.map((vlr) => {

        var indice = arrVeiculos.indexOf(vlr);

        return lista.insertAdjacentHTML("beforeend", "<div><span id=divSpanMot onclick=editaMotorista(" + indice + ")>" + vlr.placa + " - " + vlr.motorista + "</span><i class='fa fa-trash' onclick=excluirRegistro(" + indice + ")></i></div>");
        
    })

}
//MOVIMENTO DIARIO
function movimentoDiario(){
    
    console.log("entrou");
    //Formulario
    var divFormulario = document.getElementById("divFormDados");
    if(controle==0){
    //Ocultando
        divFormulario.classList.add("hide");
        controle = 1;
    }else{
        divFormulario.classList.remove("hide");
        controle = 0;
    }
    
}
//LOCALIZAR REGISTRO
function localizarRegistro(){

    /*LIMPAR*/
    
    var placaLimpa = document.getElementById("inputPlaca");
    var motoristaLimpa = document.getElementById("inputNomeMotorista");
    var cpfLimpa = document.getElementById("inputCpf")
    var notaFiscalLimpa = document.getElementById("inputNf");

    placaLimpa.value = "";
    motoristaLimpa.value = "";
    cpfLimpa.value = "";
    notaFiscalLimpa.value = "";

    //Verifica LocalStorage nao existe
    if(localStorage.hasOwnProperty("dbVeiculos")){

        //buscando do localStorage
        arrVeiculos = JSON.parse(localStorage.getItem("dbVeiculos"));
        
    }else{

        //Criando um objeto no localStorage
        localStorage.dbVeiculos = [];
        
    }

    const arrLocalizar = arrVeiculos.filter( (p) => {

        var pPlaca = p.placa.toLowerCase();
        var pMotorista = p.motorista.toLowerCase();
        var vlrPesquisa = placaPesquisa.value.toLowerCase();

        if(pPlaca.includes(vlrPesquisa)){
            return p;
        }else if (pMotorista.includes(vlrPesquisa)){;
            return p;   
        }   

    });

    /*var divFormulario = document.getElementById("divFormDados");
    divFormulario.classList.remove("hide");
    */

    arrLocalizar.map( (x) => {

        var placa = document.getElementById("inputPlaca");
        var motorista = document.getElementById("inputNomeMotorista");
        var cpf = document.getElementById("inputCpf");
        var notaFiscal = document.getElementById("inputNf");    

        return (placa.value = x.placa,
               motorista.value = x.motorista,
               cpf.value = x.cpf,
               notaFiscal.value = x.notaFiscal
               )

    })

}

//Eventos formatacao Horas
/*
inputHE.addEventListener("keypress", () => {
    let tamanho = inputHE.value.length;
    if ( tamanho === 2){
        inputHE.value += ':';
    }
})
inputHS.addEventListener("keypress", () => {
    let tamanho = inputHS.value.length;
    if ( tamanho === 2){
        inputHS.value += ':';
    }
})
inputHE2.addEventListener("keypress", () => {
    let tamanho = inputHE2.value.length;
    if ( tamanho === 2){
        inputHE2.value += ':';
    }
})
inputHS2.addEventListener("keypress", () => {
    let tamanho = inputHS2.value.length;
    if ( tamanho === 2){
        inputHS2.value += ':';
    }
})
*/
//Eventos
btnIncluir.addEventListener("click", () => {

    //console.log("Olá Mundo ! ! !");

    var placa = document.getElementById("inputPlaca").value;
    var motorista = document.getElementById("inputNomeMotorista").value;
    var cpf = document.getElementById("inputCpf").value;
    var notaFiscal = document.getElementById("inputNf").value;
    var hora1 = document.getElementById("HE1").value;
    var hora2 = document.getElementById("HS1").value;
    var hora3 = document.getElementById("HE2").value;
    var hora4 = document.getElementById("HS2").value;
    var modelo = document.getElementById("modelo").value;
    var operacao = document.getElementById("operacao").value;
    var observacao = document.getElementById("textareaObs").value;

    //Verifica LocalStorage nao existe
    if(localStorage.hasOwnProperty("dbVeiculos")){

        //buscando do localStorage
        arrVeiculos = JSON.parse(localStorage.getItem("dbVeiculos"));
        
    }else{

        //Criando um objeto no localStorage
        localStorage.dbVeiculos = [];
        
    }
    
    arrVeiculos.push({placa: placa, motorista: motorista, cpf: cpf, notaFiscal: notaFiscal, 
                        modelo: modelo, operacao: operacao, 
                            hora1: hora1, hora2: hora2, hora3: hora3, hora4: hora4,
                            observacao: observacao});

    //lista.insertAdjacentHTML("beforeend", "Moacir");

    lista.textContent = "";

    arrVeiculos.map((vlr) => {
        return lista.insertAdjacentHTML("beforeend", "<span>" + vlr.placa + " - " + vlr.motorista + "</span>");
        
    })

    //Salvando no localStorage
    localStorage.setItem("dbVeiculos", JSON.stringify(arrVeiculos));

    alert("Inclusão Efetuada Com Sucesso ! ! !");

    limpaFormulario();

});

//Atualizar/Editar
btnAtualizar.addEventListener("click", () => {
    editarRegistro();
});

//Limpa formulario
btnLimpar.addEventListener("click", () => {

    limpaFormulario();

})

//Verificando service-worker.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(function(error) {
      console.log('Falha ao registrar o Service Worker:', error);
    });
  }
  