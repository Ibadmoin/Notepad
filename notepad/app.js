// download functionality
var fileName = document.getElementById("fileName");
var fileContent = document.getElementById("textContent");

fileName.value="";
fileContent.value="";

function downloadfile(){
    if(fileName.value === "" || fileContent.value===''){
        alert("please enter file name and content");
    } else{
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

function changestyle(propertyName){
    switch(propertyName){
        case "b": 
        if(fileContent.style.fontWeight === "bold"){
            fileContent.style.fontWeight = "normal";
        } else {
            fileContent.style.fontWeight = "bold";
        }
        break;
        case "i":
            if(fileContent.style.fontStyle === "italic"){
                fileContent.style.fontStyle = "normal";
            } else {
                fileContent.style.fontStyle = "italic";
            }
            break;

            case "u":
                if(fileContent.style.textDecoration === "underline"){
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
                    // more feature to add if needed in future:
                    break;
    }
}
// alignment functionality

function changealign(alignment){
    switch(alignment){
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


function updateTextColor(){
    var colorInput = document.getElementById("textColor");
    var textColor = colorInput.value;
    fileContent.style.color = textColor;
}
