from flask import Flask, jsonify

app = Flask(__name__)

foods = [
    {"name": "Pizza", "price": 199},
    {"name": "Burger", "price": 149},
    {"name": "Biryani", "price": 249},
    {"name": "Pasta", "price": 179},
    {"name": "Dessert", "price": 120}
]

@app.route("/")
def home():
    return "Backend running!"

@app.route("/foods")
def get_foods():
    return jsonify(foods)

app.run(debug=True)