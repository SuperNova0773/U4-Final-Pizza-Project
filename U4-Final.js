let toppingsImages = {
    "pepperoni": "topping-pepperoni.jpg",
    "mushrooms": "topping-mushroom.jpg",
    "onions": "topping-onion.jpg",
    "sausage": "topping-sausage.jpg",
    "bellpeppers": "topping-bellpepper.jpg"
};


function calculatePrice() {
    let size = document.getElementById("size").value;
    let toppings = document.querySelectorAll('input[name="toppings"]:checked');
    
    let totalPrice = 0;
    let receipt = `Your Order:<br>Size: ${size}<br>Toppings: `;
    
    // Price based on size
    if (size === "small") {
        totalPrice += 6;
    } else if (size === "medium") {
        totalPrice += 8;
    } else if (size === "large") {
        totalPrice += 10;
    }
    
    // Price based on toppings
    toppings.forEach(topping => {
        totalPrice += 1.5; // Assuming each topping costs $1.50
        receipt += `${topping.value}, `;
    });
    
    // Display the total price and receipt
    receipt += `<br>Total: $${totalPrice.toFixed(2)}`;
    document.getElementById("receipt").innerHTML = receipt;

     updatePizzaImage();
}

function resetForm() {
    document.getElementById("size").value = "small";
    let toppings = document.querySelectorAll('input[name="toppings"]:checked');
    toppings.forEach(topping => {
        topping.checked = false;
    });
    document.getElementById("receipt").innerHTML = "";
}


