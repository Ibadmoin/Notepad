// download functionality
var fileName = document.getElementById("fileName");
var fileContent = document.getElementById("textContent");

fileName.value = "";
fileContent.value = "";

function downloadfile() {
    if (fileName.value === "" || fileContent.value === '') {
        alert("please enter file name and content");
    } else {
        var e = fileContent.value;
        var c = document.createElement("a");
        c.download = fileName.value + ".txt";
        var t = new Blob([e], {
            type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
    }
}

//property functionality

function changestyle(propertyName) {
    switch (propertyName) {
        case "b":
            if (fileContent.style.fontWeight === "bold") {
                fileContent.style.fontWeight = "normal";
            } else {
                fileContent.style.fontWeight = "bold";
            }
            break;
        case "i":
            if (fileContent.style.fontStyle === "italic") {
                fileContent.style.fontStyle = "normal";
            } else {
                fileContent.style.fontStyle = "italic";
            }
            break;

        case "u":
            if (fileContent.style.textDecoration === "underline") {
                fileContent.style.textDecoration = "none";
            } else {
                fileContent.style.textDecoration = "underline";
            }
            break;
        case "n":
            fileContent.style.fontWeight = "normal";
            fileContent.style.fontStyle = "normal";
            fileContent.style.textDecoration = "none";
            fileContent.style.color = "black";
            fileContent.style.textAlign = 'left';
            fileContent.style.fontSize = '18px';
            fileContent.style.fontFamily = 'sans-serif';
            // more feature to add if needed in future:
            break;
    }
}
// alignment functionality

function changealign(alignment) {
    switch (alignment) {
        case "aL":
            fileContent.style.textAlign = "left";
            break;
        case "aC":
            fileContent.style.textAlign = "center";
            break;
        case "aR":
            fileContent.style.textAlign = "right";
            break;
    }
}

// text color


function updateTextColor() {
    var colorInput = document.getElementById("textColor");
    var textColor = colorInput.value;
    fileContent.style.color = textColor;
}


// text tranform


function textTransform() {
    var selectedvalue = document.getElementById("textTransform").value;


    switch (selectedvalue) {
        case "uppercase":
            fileContent.style.textTransform = "uppercase";
            break;
        case "lowercase":
            fileContent.style.textTransform = "lowercase";
            break;
        case "capitalize":
            fileContent.style.textTransform = "capitalize";
            break;

    }
}

//fontSize 

function fontSize() {
    var font_Size = document.getElementById("fontSize").value;

    switch (font_Size) {
        case '8':
            fileContent.style.fontSize = "8px";
            break;
        case '9':
            fileContent.style.fontSize = "9px";
            break;
        case '10':
            fileContent.style.fontSize = "10px";
            break;
        case '11':
            fileContent.style.fontSize = "11px";
            break;
        case '12':
            fileContent.style.fontSize = "12px";
            break;
        case '14':
            fileContent.style.fontSize = "14px";
            break;
        case '16':
            fileContent.style.fontSize = "16px";
            break;
        case "18":
            fileContent.style.fontSize = "18px";
            break;
        case "20":
            fileContent.style.fontSize = "20px";
            break;
        case "22":
            fileContent.style.fontSize = "22px";
            break;
        case "24":
            fileContent.style.fontSize = "24px";
            break;
        case "26":
            fileContent.style.fontSize = "26px";
            break;
        case "28":
            fileContent.style.fontSize = "28px";
            break;
        case "36":
            fileContent.style.fontSize = "36px";
            break;
        case "48":
            fileContent.style.fontSize = "48px";
            break;
        case "72":
            fileContent.style.fontSize = "72px";
            break;

    }

}

// CHANGE FONT :

function fontFamily() {
    var fontname = document.getElementById("fontFamily").value;
    console.log(fontname);
    switch (fontname) {
        case 'Arial':
            fileContent.style.fontFamily = "Arial";
            break;
        case 'Segoe UI':
            fileContent.style.fontFamily = "Segoe UI";
            break;
        case 'poppins':
            fileContent.style.fontFamily = "poppins";
            break;
    }
}
