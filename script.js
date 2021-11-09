// ABRE ARQUIVO CSV E CRIA TABELA
onload = fetch("./DADOS.CSV").then(res => {
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

  });




  /// FILTRAR MULTIPLAS COLUNAS
  function searchTableColumns() {
    // Declare variables 
    var input, filter, table, tr, i, j, column_length, count_td;
    column_length = document.getElementById('tabelaDados').rows[0].cells.length;
    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaDados");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) { // except first(heading) row
      count_td = 0;
      for(j = 0; j < column_length; j++){ // except first column
          td = tr[i].getElementsByTagName("td")[j];
          /* ADD columns here that you want you to filter to be used on */
          if (td) {
            if ( td.innerHTML.toUpperCase().indexOf(filter) > -1)  {            
              count_td++;
            }
          }
      }
      if(count_td > 0){
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
    }
    
  }
/// COLORIR ROWS 

