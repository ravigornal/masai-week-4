var sugar = 0;
var rice = 0;
var wheat = 0;
var wheatIn = 0;
var SugarOut = 0;
var SugarIn = 0;

function inputClear() {
    document.getElementById('items').value = "blank";
    document.getElementById('quantityKg').value= "";
    location.reload();
}

function total() {
    var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = "Now Total Stock is" +" "+ rice + "Kg";
        body.append(display);
}

function stockInput() {
    var type = document.getElementById('items').value;
    var Quantity = Number(document.getElementById('quantityKg').value);


    if (type == 'rice') {
        rice +=  Quantity;
        //document.getElementById('status').innerHTML = rice ;
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = Quantity + "Kg of Rice is Added to Stock. Now Total Stock is" +" "+ rice + "Kg";
        body.append(display);
        console.log(rice)
        return rice;
        
    }
    else if (type == 'sugar') {
        sugar +=  Quantity;
        //document.getElementById('status').innerHTML = sugar + "Kg of Sugar is added to stock";
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent = Quantity + "Kg of Sugar is Added to Stock. Now Total Stock is"+" " + sugar+ "Kg";
        body.append(display);
        console.log(sugar)
        return sugar;
        
    }

    else if (type == 'wheat') {
        wheat +=  Quantity;
       // document.getElementById('status').innerHTML = wheat + "Kg of Wheat is added to stock";
        var body = document.querySelector("body");
        var display = document.createElement("p");
        display.textContent =  Quantity + "Kg of Wheat is Added to Stock. Now Total Stock is"+" " + wheat+ "Kg";
        body.append(display);
        console.log(wheat)
        return wheat;
        
    }

    else {
        alert ("Choose correct option")
    }
}

function stockOutput()
{
    var type = document.getElementById('items').value;
    var Quantity = document.getElementById('quantityKg').value;

    if (type == 'rice') {
        if(rice > Quantity) {
            rice -=  Quantity;
            var body = document.querySelector("body");
            var display = document.createElement("p");
            display.textContent = Quantity + "Kg of Sugar is Sold from Stock. Now Total Stock is"+" " + rice+ "Kg";
            body.append(display);
            console.log(rice)
            return rice;
        }
        else {
            alert ("No Stock")
        }
        
    }
    else if (type == 'sugar') {
        if(sugar > Quantity) {
            sugar -=  Quantity;
            var body = document.querySelector("body");
            var display = document.createElement("p");
            display.textContent = Quantity + "Kg of Sugar is Sold from Stock. Now Total Stock is" +" "+ Sugar+ "Kg";
            body.append(display);
            console.log(sugar)
            return sugar;
        }
        else {
            alert ("No Stock")
        }
        
    }

    else if (type == 'wheat') {
        if(wheat > Quantity) {
            wheat -=  Quantity;
            var body = document.querySelector("body");
            var display = document.createElement("p");
            display.textContent = Quantity + "Kg of Sugar is Sold from Stock. Now Total Stock is" +" "+ wheat + "Kg";
            body.append(display);
            console.log(wheat)
            return wheat;
        }
        else {
            alert ("No Stock")
        }
    }

    else {
        alert("Enter a correct option")
    }
}
