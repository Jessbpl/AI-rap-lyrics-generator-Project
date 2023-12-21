function displayLyrics(response) {
  console.log("lyrics generated");
  new Typewriter("#lyrics", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "🎤",
    delay: 1.5,
  });
}

function generateLyrics(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions");

  let prompt = `User instructions: ${instructions.value}`;
  let context =
    "You are an AI rap expert with a penchant for crafting lively and concise rap verses. Your specialty lies in creating fun and punchy lyrics. Your task is to generate a set of 4 short, engaging lines. Follow the user's instructions closely by presenting the output in basic HTML, with each line separated by a <br/>. Finally, sign off the lyrics with 'SheCodes AI' enclosed within a <strong> element at the conclusion of the composition.";
  let apiKey = "eb214ccaa33987f7248o49846e082tab";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let lyricsElement = document.querySelector("#lyrics");
  lyricsElement.classList.remove("hidden");
  lyricsElement.innerHTML = ` <div class="generating"> Generating your lyrics about ${instructions.value}...</div>`;

  console.log("Generating lyrics");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayLyrics);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateLyrics);
