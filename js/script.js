const box = document.getElementById("caja");

function CambiarColor(){

    const currentColor = box.style.backgroundColor;

    if (currentColor === "grey" || currentColor === "") {
        box.style.backgroundColor = "black";
    } else {

        box.style.backgroundColor = "grey";
    }

}