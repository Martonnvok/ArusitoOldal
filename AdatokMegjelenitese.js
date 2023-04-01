export function megjelenitTabla(list) {
    const article = document.querySelector("article");
    let htmlkod =

        `
    <header><h1>Oláh pékség</h1></header> 
    <div class="container mt-3">
    <table class="table">
    <thead class="table-dark">
        <tr>
            <td>Neve</td>
            <td>db</td>
            <td>Ár</td>
        </tr>
    </thead>
    <tbody>`;
    for (let index = 0; index < list.length; index++) {
        htmlkod += `<tr>
            <td>${list[index].nev}</td>
            <td>${list[index].darab}</td>
            <td>${list[index].ar}</td>
            </tr>`;
    }
    htmlkod += ` </tbody >
    </table >`;
    article.innerHTML += htmlkod;
}