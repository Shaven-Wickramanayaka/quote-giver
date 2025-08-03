const quotes = [
  "Enter your big bad wolf era -shav",
  "The sky is blue and the grass is green sometimes -ru",
  "Poles whisper life's greatest secrets -shav",
  "I swallowed a dictionary as a child -shav",
  "Onwards my valiant steed -shav",
  "Rice bucket challenge -shav",
  "Gigachalant -shav",
  "That's the end of my saga -ru",
  "I've fallen into empty swimming pools -shav",
  "Please come here on sukimobile -shav",
  "I'm an epsilon -shav",
  "Bang bang! -suji",
  "Dominos help my laptop crashed -ru",
  "Im changin my name to Dave -shav",
  "Some may say a toe way street -ru",
  "And rummy lowk hurts -ru",
  "Okay whimsical women -shav",
  "My guchu huchu puru puru baba -ru",
  "My fav sound is froop -ru",
  "terrifting; terdiftng -ru",
  "Cockoraches are cute tho -shav",
  "Stewie wonder was my favorite turtle -ru",
];
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const originalContent = event.target.result;
    const newContent = originalContent + "\nAppended text.";

    const newBlob = new Blob([newContent], { type: "text/plain" });
    const url = URL.createObjectURL(newBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "updatedFile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  reader.readAsText(file);
});
function quoteGenerator() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
}
