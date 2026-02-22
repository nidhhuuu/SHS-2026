let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("http://127.0.0.1:5000/foods")
.then(res => res.json())
.then(data => {

    const container = document.querySelector(".food-container");
    if(!container) return;

    container.innerHTML = "";

    data.forEach(item => {

        const card = `
        <div class="food-card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">
                Add
            </button>
        </div>
        `;

        container.innerHTML += card;
    });
});
function addToCart(name, price) {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
    name: name,
    price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart");

}
function toggleSettings() {
  const drop = document.querySelector(".dropdown");

  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}
function login(e){
  e.preventDefault();

  const user = document.getElementById("user").value;

  localStorage.setItem("user", user);

  alert("Login successful");

  window.location.href="index.html";
}
const user = localStorage.getItem("user");
if(user){
  document.querySelector("nav").innerHTML +=
    `<span>Welcome ${user}</span>`;
}
navigator.geolocation.getCurrentPosition(pos => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  console.log("Location:", lat, lon);
});
document.getElementById("cart-count").innerText = cart.length;