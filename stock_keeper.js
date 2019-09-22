riceInArray = []
riceOutArray = []
sugarInArray = []
sugarOutArray = []
wheatInArray = []
wheatOutArray = []


function inputClear() {
    document.getElementById('items').value = "blank";
    document.getElementById('quantityKg').value= "";
    location.reload();
}

function stockInput() {
    var type = document.getElementById('items').value;
    if(type == 'sugar') {
        //console.log(type)
        var sugarQuantity = document.getElementById('quantityKg').value;
        sugarInArray.push(sugarQuantity);
        console.log(sugarInArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = sugarQuantity + "Kg of Sugar is Added to Stock";
        body.append(display);
    }

    else if (type == 'rice') {
        var riceQuantity = document.getElementById('quantityKg').value;
        riceInArray.push(riceQuantity);
        console.log(riceInArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = riceQuantity + "Kg of Rice is Added to Stock";
        body.append(display);
    }

    else if (type == 'wheat') {
        var wheatQuantity = document.getElementById('quantityKg').value;
        wheatInArray.push(wheatQuantity);
        console.log(wheatInArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = wheatQuantity + "Kg of Wheat is Added to Stock";
        body.append(display);
    }
    }

function stockOutput() {
    var type = document.getElementById('items').value;
    if(type == 'sugar') {
        //console.log(type)
        var sugarQuantity = document.getElementById('quantityKg').value;
        sugarOutArray.push(sugarQuantity);
        console.log(sugarOutArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = sugarQuantity + "Kg of Sugar is Removed from Stock";
        body.append(display);
    }

    else if (type == 'rice') {
        var riceQuantity = document.getElementById('quantityKg').value;
        riceOutArray.push(riceQuantity);
        console.log(riceOutArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = riceQuantity + "Kg of Rice is Removed from Stock";
        body.append(display);
    }

    else if (type == 'wheat') {
        var wheatQuantity = document.getElementById('quantityKg').value;
        wheatOutArray.push(wheatQuantity);
        console.log(wheatOutArray);
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = wheatQuantity + "Kg of Wheat is Removed from Stock";
        body.append(display);
    }
}
    

