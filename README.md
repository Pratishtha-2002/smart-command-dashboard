# 🚀 Smart Command Dashboard

A dynamic, portfolio-ready web application built completely from scratch using vanilla **HTML, CSS, and JavaScript**. This project was created independently to step away from "Tutorial Hell" and focus on core developer logic, DOM manipulation, and intent recognition.

---

## 🌟 Key Features

* 🕒 **Live System Clock & Dynamic Greetings** – Automatically tracks the real-time system clock and dynamically updates the greeting message (`Good Morning`, `Good Afternoon`, or `Good Evening`) based on the hours of the day.
* 🎨 **DOM Manipulation & Theme Controller** – Parses user inputs for exact color keywords (e.g., `red`, `blue`, `black`, `purple`) and instantly updates the global background theme and card contrasts dynamically.
* 🎲 **Random Color Engine** – Generates custom random Hex color codes on-the-fly when the user enters the `random` command.
* 🔍 **Smart Search Engine Integration** – Utilizes string parsing methods to detect search intents, slice query substrings, and programmatically open direct Google search results in a new browser tab.
* ⌨️ **Keyboard Event Handling** – Enhances user accessibility by capturing keyboard events, allowing commands to execute seamlessly by hitting the `Enter` key without using a mouse.

---

## 🧠 JavaScript Concepts Learned & Implemented

* **DOM Selection:** Targeted HTML elements reliably using `document.getElementById`.
* **String Methods:** Handled user input processing using `.trim()`, `.toLowerCase()`, `.startsWith()`, and `.substring()`.
* **Conditional Logic:** Built structured `if / else if / else` control flows to manage multiple independent user intents within a single input box.
* **Event Listeners:** Bound actions to interactive components using both `click` and `keydown` event types.
* **Timers:** Automated UI background intervals smoothly using `setInterval` to power the live clock.

---

## 🛠️ Tech Stack Used

* **HTML5:** For creating the semantic structure of the dashboard card.
* **CSS3:** For modern UI styling, layouts, cards, shadows, and smooth background transitions.
* **Vanilla JavaScript:** For core algorithmic logic, string evaluation, and browser window manipulation.

---

## 📖 How to Use

1. **Greet Yourself:** Type your name in the input field and hit **Enter** or click **Run Command**.
2. **Change Theme:** Type a specific color name like `red`, `blue`, `pink`, `yellow`, or `black` to transform the UI.
3. **Roll a Dice:** Type `random` to instantly generate and apply a random unique background color.
4. **Search Google:** Type `google <your query>` (e.g., `google javascript arrays`) to automatically open Google search for that specific topic in a new tab.
