const clockElement = document.getElementById("live-clock");
const greetingElement = document.getElementById("greeting-text");
const mainInput = document.getElementById("user-input");
const actionBtn = document.getElementById("action-btn");
const replyText = document.getElementById("reply-text");
const mainCard = document.getElementById("main-card");

function startClock() {
  const time = new Date();
  clockElement.innerText = time.toLocaleTimeString()

  const hours = time.getHours()
  if (hours < 12) {
    greetingElement.innerText = "Good Morning! ☀️"
  }
  else if (hours < 17) {
    greetingElement.innerText =  "Good Afternoon! 🌤️"
  }
  else{
    greetingElement.innerText = "Good Evening! 🌙"
  }
}
setInterval(startClock, 1000);
startClock()

function generateRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

actionBtn.addEventListener("click", function () {
  const rawText = mainInput.value.trim();
  const lowerText = rawText.toLowerCase();

  if (lowerText === "") {
    replyText.innerText = "Please fill!";
    return;
  }
  else if (lowerText.startsWith("google")) {
    const searchQuery = rawText.substring(7);
    replyText.innerText = "Opening Google Search for: " + searchQuery
    window.open("https://google.com" + encodeURIComponent(searchQuery), '_blank')
  }
  else if (lowerText === "random") {
    const randomColor = generateRandomColor()
    document.body.style.backgroundColor = randomColor
    replyText.innerText = "🎨 Random background color applied: " + randomColor
  }
  else{
    replyText.innerText = "Hello " + rawText + "! Welcome to your dashboard."
  }
  mainInput.value = ""
});

mainInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        actionBtn.click()
    }
})
