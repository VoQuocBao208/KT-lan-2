// <li class="list-group-item">Cras justo odio</li>
// <li class="list-group-item">Dapibus ac facilisis in</li>
// <li class="list-group-item">Morbi leo risus</li>
// <li class="list-group-item">Porta ac consectetur ac</li>
// <li class="list-group-item">Vestibulum at eros</li>

async function QG() {
  try {
    const responseQG = await fetch("https://restcountries.com/v3.1/all");
    const resultQG = await responseQG.json();
    console.log(resultQG);
    const name = resultQG;
    

    const group = document.getElementById("list-group");

    name.forEach((item) => {
      const listQG = document.createElement("li");
      listQG.classList.add("list-group-item")

      const nameQG = document.createElement("p");

      listQG.appendChild(nameQG);

      nameQG.innerText = "Official name:" + item.name.official;

      group.appendChild(listQG);
    });
  } catch (error) {
    console.log(error);
  }
}
QG();
