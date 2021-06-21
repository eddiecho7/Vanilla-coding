function digitGenerator() {
    var randomNumber = Math.floor(Math.random()* 16);
    switch (randomNumber) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        case 7:
            return 7;
        case 8:
            return 8;
        case 9:
            return 9;
        case 10:
            return "A";
        case 11:
            return "B";
        case 12:
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15:
            return "F";
    }
}

function hexGenerator() {
    var hexCode = "#";
    for (i=0; i<6; i++) {
        hexCode += digitGenerator();
    }
    return hexCode;
}

function backgroundColorChanger() {
    document.querySelector("body").style.backgroundColor = hexGenerator();
    document.querySelector("h1").innerHTML = "HEX COLOR :" + hexGenerator();
}



