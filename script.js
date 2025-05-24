const mods = [
  {
    name: "My-Mod",
    description: "Este mod es solo un ejemplo. Contiene personajes personalizados y nuevas canciones.",
    difficulty: "normal",
    download: "modTemplate.zip"
  },
  // Agrega más mods aquí
];

const modList = document.getElementById("modList");
const searchBar = document.getElementById("searchBar");
const difficultyFilter = document.getElementById("difficultyFilter");

function displayMods(filterText = "", filterDifficulty = "all") {
  modList.innerHTML = "";

  const filteredMods = mods.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(filterText.toLowerCase());
    const matchesDifficulty = filterDifficulty === "all" || mod.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  if (filteredMods.length === 0) {
    modList.innerHTML = "<p>No se encontraron mods 😢</p>";
    return;
  }

  filteredMods.forEach(mod => {
    const modCard = document.createElement("div");
    modCard.className = "modCard";
    modCard.innerHTML = `
      <h2>${mod.name}</h2>
      <p>${mod.description}</p>
      <a href="${mod.download}" download>📥 Descargar ZIP</a>
    `;
    modList.appendChild(modCard);
  });
}

searchBar.addEventListener("input", () => {
  displayMods(searchBar.value, difficultyFilter.value);
});

difficultyFilter.addEventListener("change", () => {
  displayMods(searchBar.value, difficultyFilter.value);
});

displayMods(); // Inicial
