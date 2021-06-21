var today = new Date();
var thisMonth = today.getMonth();
var thisYear = today.getFullYear();
var firstDay = new Date(today.getFullYear(),today.getMonth(),1);
var table = document.querySelector(".calendar-box");

function getMonthEnd(month) {
    switch (month) {
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
    }
}

function updateDate(date) {
    document.querySelector(".tday").innerHTML = Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(date);
    document.querySelector(".day").innerHTML = date.getDate();
    document.querySelector(".month-year").innerHTML = Intl.DateTimeFormat('en-US', {month: 'short'}).format(date) + " " + date.getFullYear();
}

function updateCalendar(year, month) {
    var thisDate = new Date(year, month);

    //Populate first calendar row
    var row = table.insertRow(1);
    for (i = 0; i < 7; i++) {
        if (i === thisDate.getDay()) {
            row.insertCell(i).innerHTML = 1;
        }
        else {
            row.insertCell(i);
        }
    }
    for (i = thisDate.getDay() + 1; i < 7; i++) {
        row.insertCell(i).innerHTML = i - thisDate.getDay() + 1; // j - firstDay.getDay() + 1 always equals to 2
    }

    //Populate remaining rows
    for (i = 2; i < 7; i++) {
        var row = table.insertRow(i);
        for (j = 0; j < 7; j++) {
            if (8 - thisDate.getDay() + j + (i - 2) * 7 - 1 >= getMonthEnd(month)) {
                break;
            }
            else {
                row.insertCell(j).innerHTML = 8 - thisDate.getDay() + j + (i - 2) * 7;
            }
        }
    }

}

function nextCalendar() {
    for (k = 1; k < 7; k++) {
        table.deleteRow(1);
    }
    thisMonth = thisMonth + 1;
    today = new Date(thisYear, thisMonth);

    updateDate(today);
    updateCalendar(today.getFullYear(), today.getMonth());
    jumpDate();
}

function prevCalendar() {
    for (k = 1; k < 7; k++) {
        table.deleteRow(1);
    }
    thisMonth = thisMonth - 1;
    today = new Date(thisYear, thisMonth);

    updateDate(today);
    updateCalendar(today.getFullYear(), today.getMonth());
    jumpDate();
}

function jumpDate() {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function () {
            showDate(this);
        };
    }
    function showDate(cell) {
        selectDate = new Date(today.getFullYear(), today.getMonth(), cell.innerHTML);
        updateDate(selectDate);
    }
}


function init() {
    updateDate(today);
    updateCalendar(thisYear,thisMonth);
    jumpDate();
}


