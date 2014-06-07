window.onload = function () {
    function onGenerateDivsButtonClick() {
        var contentDiv = document.getElementById('content');
        var dfrag = document.createDocumentFragment();

        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }

        var numberOfDivs = (document.getElementById('tb-divs-number').value) || 0;

        for (var i = 0; i < numberOfDivs; i++) {
            var newDiv = generateDiv();
            dfrag.appendChild(newDiv);
        }

        contentDiv.appendChild(dfrag);
    }

    function generateDiv() {
        var widthAndHeightMin = 20;
        var widthAndHeightMax = 100;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var borderRadiusMinAndMax = 50;
        var borderWidthMin = 1;
        var borderWidthMax = 20;

        var generatedDiv = document.createElement('div');
        generatedDiv.style.width = getRandomValuesBetween(widthAndHeightMin, widthAndHeightMax) + 'px';
        generatedDiv.style.height = getRandomValuesBetween(widthAndHeightMin, widthAndHeightMax) + 'px';
        generatedDiv.style.backgroundColor = getRandomColor();
        generatedDiv.style.color = getRandomColor();
        generatedDiv.style.position = "absolute";
        generatedDiv.style.left = getRandomValuesBetween(0, windowWidth) + 'px';
        generatedDiv.style.top = getRandomValuesBetween(0, windowHeight) + 'px';
        generatedDiv.innerHTML = '<strong>div</strong>';
        generatedDiv.style.borderRadius = getRandomValuesBetween(borderRadiusMinAndMax, borderRadiusMinAndMax) + 'px';
        generatedDiv.style.borderColor = getRandomColor();
        generatedDiv.style.borderWidth = getRandomValuesBetween(borderWidthMin, borderWidthMax) + 'px';

        return generatedDiv;
    }

    function getRandomValuesBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        var randomColor = 'rgb(' + getRandomValuesBetween(0, 255) + ', ' + getRandomValuesBetween(0, 255) + ', ' + getRandomValuesBetween(0, 255) + ')';

        return randomColor;
    }

    generateDivsButton = document.getElementById('btn-generate-divs');
    generateDivsButton.addEventListener('click', onGenerateDivsButtonClick);
};