let size = 100;
growRect = true;

document.body.style.height = "10000px";
const div = document.createElement('div');
document.body.appendChild(div);

div.style.position = "fixed";
div.style.top = 0;
div.style.bottom = 0;
div.style.width = "100%";
div.style.height = size + "px"; 
div.style.backgroundColor = "green";

const changeHeight = function() {

    if (size>window.innerHeight/2) {
        growRect = !growRect;
        div.style.backgroundColor = "red";
    }
    else if (size <= 0) {
        growRect = !growRect;
        div.style.backgroundColor = "green";
    }

    if (growRect) {
        size +=10;
        div.style.height = size + "px"; 
    } else {
        size -=10;
    }
    div.style.height = size + "px"; 
}
window.addEventListener('scroll', changeHeight)