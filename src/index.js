function displayLyrics(response) {
  console.log("lyrics generated");
  new Typewriter("#lyrics", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "🎤",
    delay: 1,
  });
}

function generateLyrics(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions");

  let prompt = `User instructions: ${instructions.value}`;
  let context =
    "You are an AI expert in rap that likes to write fun and short rap lyrics. Please generate 6 line lyrics and don't include SheCodes AI on the lyrics.  Please make sure to use the user instructions. Provide the output in basic HTML and separate EACH line with a <br/>. Sign the lyrics with 'SheCodes AI' inside a <strong> element at the very end of the lyrics";
  let apiKey = "eb214ccaa33987f7248o49846e082tab";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating lyrics");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayLyrics);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateLyrics);
