function nextImage() {
    var currentSource = document.querySelector(".feature-image").src;
    var currentNum = parseInt(currentSource.charAt(currentSource.length-5));
    if (currentNum === 5) {
        document.querySelector(".feature-image").src = "images/image-1.png";
    }
    else {
        document.querySelector(".feature-image").src = "images/image-" + (currentNum + 1) + ".png";
    }
}

function prevImage() {
    var currentSource = document.querySelector(".feature-image").src;
    var currentNum = parseInt(currentSource.charAt(currentSource.length-5));
    if (currentNum === 1) {
        document.querySelector(".feature-image").src = "images/image-5.png";
    }
    else {
        document.querySelector(".feature-image").src = "images/image-" + (currentNum - 1) + ".png";
    }
}

function firstDot() {
    document.querySelector(".feature-image").src = "images/image-1.png";
}

function secondDot() {
    document.querySelector(".feature-image").src = "images/image-2.png";
}

function thirdDot() {
    document.querySelector(".feature-image").src = "images/image-3.png";
}

function fourthDot() {
    document.querySelector(".feature-image").src = "images/image-4.png";
}

function fifthDot() {
    document.querySelector(".feature-image").src = "images/image-5.png";
}


