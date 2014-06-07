var contentDiv = document.getElementById("content");
var x, y, angle = 0;

for (var i = 0; i < 5; i++) {
    x = Math.round(Math.cos(angle) * 100);
    y = Math.round(Math.sin(angle) * 100);
    angle += 5;
    var currentDiv = document.createElement("div");
    currentDiv.className = 'moving';
    currentDiv.style.position = "absolute";
    currentDiv.style.top = (200 + y) + "px";
    currentDiv.style.left = (300 + x) + "px";
    contentDiv.appendChild(currentDiv);
}

function onMoveDivsButtonClick() {
    angle = 0;
    setInterval(function () {

        for (var j = 0; j < contentDiv.childElementCount; j++) {
            var div = contentDiv.children[j];

            div.style.left = (300 + 100 * Math.cos(angle)) + "px";
            div.style.top = (200 + 100 * Math.sin(angle)) + "px";

            angle += 5;
        }

        angle += 0.2;
    }, 100);
}

moveDivsButton = document.getElementById('btn-move-divs');
moveDivsButton.addEventListener('click', onMoveDivsButtonClick);