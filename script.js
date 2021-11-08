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