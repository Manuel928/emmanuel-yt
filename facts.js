const SERVER = "https://dogapi.dog/api/v2/facts";
const factSection = document.getElementById("facts");
let factText = document.getElementById("factText");
const btn = document.getElementById("getFacts");

async function fetchFacts() {
  const response = await fetch(SERVER);
  const result = await response.json();
  return result.data;
}

async function runCode() {
  const facts = await fetchFacts();
  facts.forEach((fact) => {
    factText.textContent = fact.attributes.body;
  });
}

btn.addEventListener("click", runCode);
