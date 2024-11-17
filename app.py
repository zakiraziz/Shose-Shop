from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample Products
products = [
    {"id": 1, "name": "Running Shoes", "description": "High-performance shoes for speed and comfort.", "price": 50},
    {"id": 2, "name": "Casual Shoes", "description": "Stylish and comfortable for everyday wear.", "price": 40},
    {"id": 3, "name": "Luxury Shoes",}
]