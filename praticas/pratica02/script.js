const navInicio = document.getElementById('inicio');
const navNovo = document.getElementById('novo');
const navContatos = document.getElementById('contatos');
const raiz = document.getElementById('root');

// <!-- novo.html -->
// <!--     
//     <h2>Novo Contato</h2>
//     <form action="" method="post">
//         <input type="text" name="" id=""/>
//         <input type="tel" name="" id=""/>
//         <input type="submit" value="Enviar"/>
//     </form> 
// -->

// <!-- contatos.html -->
// <!--     
//     <h2>Meus Contatos</h2>
//     <table>
//         <tr><th>Nome</th><th>Telefone de Contato</th></tr>
//         <tr><td>A</td><td>999999999</td></tr>
//         <tr><td>B</td><td>999999999</td></tr>
//         <tr><td>C</td><td>999999999</td></tr>
//     </table> 
// -->

function SelecionaPaginaAtiva() { 
    
    navInicio.addEventListener('click', function() {
        if(document.querySelector("h2")) {
            document.querySelector("h2").remove();
        }
        navNovo.classList.remove('ativo');
        navContatos.classList.remove('ativo');
        raiz.innerHTML = '';
    });
    
    navNovo.addEventListener('click', function() { 
        navNovo.classList.add('ativo');
        navContatos.classList.remove('ativo');
        raiz.innerHTML = '';
    });
    
    navContatos.addEventListener('click', function() {
        navContatos.classList.add('ativo');
        navNovo.classList.remove('ativo');
        raiz.innerHTML = '';
    });

}

function Titulo(texto="") { 
    const h2 = document.createElement('h2');
    h2.innerText = texto;
    return h2;
}

function TabelaDeContatos(tdCol1=[""], tdCol2=[""]) {
    const table = document.createElement('table');
    const trCabecalho = document.createElement('tr');
    const th1Cabecalho = document.createElement('th');
    th1Cabecalho.innerText = 'Nome';
    const th2Cabecalho = document.createElement('th');
    th2Cabecalho.innerText = 'Telefone de Contato';
    trCabecalho.append(th1Cabecalho);
    trCabecalho.append(th2Cabecalho);
    table.append(trCabecalho);
    const trLinha = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

}

function Formulario() { }
function PaginaNovoContato() { }
function PaginaMeusContatos() { }

SelecionaPaginaAtiva();
