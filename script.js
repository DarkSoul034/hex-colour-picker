function getValue(color) {
  //Gets the value of a specific r, g or b component
  var rgb = document.body.style.backgroundColor;
  var list = rgb.match(/\d+/g);
  document.getElementById("rgbValue").innerHTML = "RGB Value: " + list;
  if (color == "r" || color == 1) {
    var value = list[0];
  } else if (color == "g" || color == 2) {
    var value = list[1];
  } else if (color == "b" || color == 3) {
    var value = list[2];
  }
  return(value);
}


function updateColor(color) {
  //Updates the color while maintaining the values of the other two r, g or b components
  if (color == "r") {
    var r = $("#rSlider").val();
    var colorCode = "rgb(" + r + ", " + getValue("g") + ", " + getValue("b");
    document.body.style.backgroundColor = colorCode;
  } else if (color == "g") {
    var g = $("#gSlider").val();
    var colorCode = "rgb(" + getValue("r") + ", " + g + ", " + getValue("b");
    document.body.style.backgroundColor = colorCode;
  } else if (color == "b") {
    var b = $("#bSlider").val();
    var colorCode = "rgb(" + getValue("r") + ", " + getValue("g") + ", " + b;
    document.body.style.backgroundColor = colorCode;
  }
  
  //Makes sure the text is visible on highly bright/dark colours, and updates the text that tells you the colour in HEX
  document.getElementById("hexValue").innerHTML = "Hex Value: #" + toHex();
  var total = (parseInt(($("#rSlider").val()), 10) + parseInt(($("#gSlider").val()), 10) + parseInt(($("#bSlider").val()), 10));
  if (total < 380) {
    document.getElementById("hexValue").style = "color: #ffffff";
    document.getElementById("rgbValue").style = "color: #ffffff";
  } else if (total > 380) {
     document.getElementById("hexValue").style = "color: #000000";
     document.getElementById("rgbValue").style = "color: #000000";
  }
  
}

function toHex() { 
  //Converts an rgb code (r, g, b) to HEX
  var final = "";
  for (var i = 0; i <= 3; i++) {
    var hex = Number(getValue(i+1)).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    final += hex;
  }
  final = final.substr(0, 6);
  return final;
};
