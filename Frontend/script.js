alert("Welcome to Foodie App!");
document.getElementById("search").addEventListener("keyup", function() {
 let value = this.value.toLowerCase();
 let cards = document.querySelectorAll(".food-card");

 cards.forEach(card => {
   let text = card.innerText.toLowerCase();
   card.style.display = text.includes(value) ? "block" : "none";
 });
});