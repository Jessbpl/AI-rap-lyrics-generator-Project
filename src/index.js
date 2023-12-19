function generateLyrics(event) {
  event.preventDefault();

  new Typewriter("#lyrics", {
    strings: "Generate lyrics please",
    autoStart: true,
    cursor: "🎤",
    delay: 1,
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateLyrics);
