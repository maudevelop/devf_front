function colorOf(red, green, blue){
    var hex = "#";
    
    if (red > 255 || green > 255 || blue > 255){
        return 'Error, color invalido';
    }else{
        red < 10 ? hex += '0' + red.toString(16): hex += red.toString(16);
        green < 10 ? hex += '0' + green.toString(16): hex += green.toString(16);
        blue < 10 ? hex += '0' + blue.toString(16): hex += blue.toString(16);
        return hex;
    }
}


console.log(colorOf(255,0,256));
