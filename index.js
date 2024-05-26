// Select the checkbox
const checkbox = document.getElementById("checkbox");
const h4 = document.querySelector("h4");
const dash = document.querySelector(".dash");
const cardi = document.querySelector(".card");
const cards = document.querySelectorAll(".followers .card");
const likes = document.querySelectorAll(".likes .views");
const liked = document.querySelectorAll(".likes");
const API = "http://localhost:8000/overviewToday";

// Add an event listener to the checkbox to listen for changes
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    document.body.style.color = "hsl(0, 0%, 100%)";
    dash.style.color = "black";
    // cardi.style.color = "black";
    cards.forEach((card) => {
      card.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    cards.forEach((card) => {
      card.style.color = "black";
    });
    likes.forEach((views) => {
      views.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    likes.forEach((views) => {
      views.style.color = "black";
    });
  } else {
    dash.style.color = "white";
    // cardi.style.color = "white";

    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    cards.forEach((card) => {
      card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    cards.forEach((card) => {
      card.style.color = "white";
    });
    likes.forEach((views) => {
      views.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    likes.forEach((views) => {
      views.style.color = "white";
    });
  }
});

// json-server
fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((stat) => {
      const overviewStats = document.querySelector(".overview-stats");
      const statDiv = document.createElement("div");
      statDiv.classList.add("overview-stat");
      statDiv.innerHTML = `
            <span>${stat.type}</span>
            <h2>${stat.count}</h2>
            <small>${stat.change}</small>
        `;
      overviewStats.appendChild(statDiv);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
