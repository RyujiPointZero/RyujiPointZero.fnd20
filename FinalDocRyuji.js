# RyujiPointZero.fnd20
console.log("繋がったぜ!");
function gators(){
    let element = document.getElementById('text');
    // console.log(element.value);
    for (let i = 0 ; i < element.value ; i++){
        // console.log("i:",i)
    document.getElementsByClassName("bluebox")[0].textContent += "🐊";
    //document.getElementsByClassName("bluebox")[0].style.backgroundColor = "red";
}
}

const target = document.getElementsByClassName("button")[0];
target.addEventListener("click", gators);
