console.clear();

async function fetchData() {
  try {
    const url = await fetch("https://swapi.dev/api/people");

    const data = await url.json();
    console.log("Everything: ", data);
    console.log("Luke Skywalker: ", data.results[0]);
    console.log("Birthyear of Leia: ", data.results[4].birth_year);
    console.log("Eyecolor of R2D2: ", data.results[2].eye_color);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
