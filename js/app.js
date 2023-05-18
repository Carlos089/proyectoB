var pasteles = {
    donuts: {
        name: "Donut clásico",
        description: "Con azúcar mmm",
        image: "data:image/jpeg;base64,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",
        punctuation: "",
        reviewAnonymous: true,
    },
    bollycao: {
        name: "Bollycao bombón",
        description: "Bombonsito rico",
        image: "data:image/jpeg;base64,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",
        punctuation: "",
        reviewAnonymous: true,
    }
}


var selectedCake = prompt("Qué prefieres, donuts o bollycao?");

var stars = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}
var rating = prompt("¿Cuántas estrellas le das? (una, dos, tres, cuatro o cinco)");

pasteles["reviewAnonymous"] = confirm("¿Deseas tu reseña anónima?");


document.getElementById("nameId").innerHTML = "El pastel que me gusta es el " + pasteles[selectedCake]["name"] + " porque está riquísimo!";
document.getElementById("descriptionId").innerHTML = pasteles[selectedCake]["description"];
document.getElementById("imgId").src = pasteles[selectedCake]["image"];
document.getElementById("ratingId").innerHTML = stars[rating];
document.getElementById("anonymousOrNotId").checked = pasteles["reviewAnonymous"];