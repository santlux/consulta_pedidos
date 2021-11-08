// ABRE ARQUIVO CSV E CRIA TABELA
onload = fetch("./data.csv").then(res => {
    return res.text()
}).then(data => {
    let result = data.split(/\r?\n|\r/).map(e => {
        return e.split(";")
    })
    result.forEach(e => {
        let m = e.map(e => {
            return `<td>${e}</td>`;
        }).join("")
        let ce = document.createElement("tr");
        ce.innerHTML = m;
        if (ce.innerText != "") {
            document.querySelector("table").appendChild(ce);
        }
        // console.log(m);

    })
})
//FITRO PEDIDOS 
function pesquisaPedido() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputPedido");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaDados");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
//FITRO NOMES 
function pesquisaNome() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputNome");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaDados");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
