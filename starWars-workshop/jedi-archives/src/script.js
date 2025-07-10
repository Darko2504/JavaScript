//1) declare global variables
const BASE_API_URL = `https://swapi.dev/api/`;

const swapiResources = {
  people: "people",
  starships: "starships",
};

const tableHeaders = {
  people: [`Name`, `Height`, `Mass`, `Gender`, `Birth Year`, `Appereances`],
  spaceships: [`Name`, `Model`, `Manufacturer`, `Cost`, `People Capacity`, `Class`]
};

//2) selecting elements
const elements = {
  peopleBtn: document.getElementById(`peopleBtn`),
  shipsBtn: document.getElementById(`shipsBtn`),
  loader: document.getElementById(`loader`),
  resultDiv: document.getElementById(`result`),
  prevBtn: document.getElementById(`prevBtn`),
  nextBtn: document.getElementById(`nextBtn`),
};

//3)function definitions


// Constructor Functions

function Person(name, height, mass, gender, birthYear, appereances){
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.gender = gender;
    this.birthYear = birthYear;
    this.appereances = appereances;
}

function Starships(name, model, manufacturer  ){

}
async function getDataAsync(resource) {
  try {
    const url = `${BASE_API_URL}${resource}?page=1`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data`, error);
    elements.resultDiv.innerHTML = `<p style="text-danger text-center"> An error occured . Please try again later</p>`;
  }
}

function getTableHtml(headers, dataRows) {
  return `
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    ${headers}
                </tr>
            </thead>

            <tbody>
                 ${dataRows}
            </tbody>
         </table>
    `;
}

function renderPeopleTable(data) {

    // 1) map to person objects
    const people = data.results.map(p => new Person(p.name, p.height, p.mass, p.gender, p.birth_year, p.films.length));
    console.log(people);
    

  // generate headers html
  let headersHtml = `` 
  headersHtml = tableHeaders.people.map(header => `<th>${header}</th>`).join(``);
  // generate data rows
    let peopleHtml = people.map(person => 
        `<tr>
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.gender}</td>
        <td>${person.birthYear}</td>
        <td>${person.appereances}</td>
    </tr>`
    ).join(``);
   
  elements.resultDiv.innerHTML = getTableHtml(headersHtml, peopleHtml);
}

function renderShipsData(data) {
    const ships = data.results.map(ship => {
        
    })
}

//4)handling events
elements.peopleBtn.addEventListener(`click`, async () => {
  const people = await getDataAsync(swapiResources.people);
  renderPeopleTable(people);
});

elements.shipsBtn.addEventListener(`click`, async () => {
  const ships = await getDataAsync(swapiResources.starships);
  renderShipsData(ships);
});
