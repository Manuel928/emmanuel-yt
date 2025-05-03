const SERVER = "https://dogapi.dog/api/v2/breeds";
const breedSection = document.querySelector("#breeds");

async function fetchDogBreeds() {
  const response = await fetch(SERVER);
  const result = await response.json();
  return result.data;
}

async function runWebsite() {
  const breeds = await fetchDogBreeds();
  breeds.forEach((breed) => {
    const container = document.createElement("div");
    const name = document.createElement("p");
    const desc = document.createElement("p");
    const life = document.createElement("p");
    const maleWeight = document.createElement("p");
    const femaleWeight = document.createElement("p");
    const hypoallergenic = document.createElement("p");

    name.textContent = breed.attributes.name;
    desc.textContent = breed.attributes.description;
    life.textContent =
      breed.attributes.life.min +
      " years to " +
      breed.attributes.life.min +
      " years";
    maleWeight.textContent =
      breed.attributes.male_weight.min +
      " kg to " +
      breed.attributes.male_weight.max +
      "kg";
    femaleWeight.textContent =
      breed.attributes.female_weight.min +
      " kg to " +
      breed.attributes.female_weight.max +
      "kg";
    hypoallergenic.textContent = breed.attributes.hypoallergenic
      ? "This breed is an hypoallergenic"
      : "This breed is not an hypoallergenic";

    container.appendChild(name);
    container.appendChild(desc);
    container.appendChild(life);
    container.appendChild(maleWeight);
    container.appendChild(femaleWeight);
    container.appendChild(hypoallergenic);
    breedSection.appendChild(container);
  });
}

runWebsite();
