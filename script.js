function generateColor() {
    var length = 6,
        charset = "abcdef0123456789",
        retVal = "#";
        for (var i = 0, n = charset.length; i < length; ++i) {
             retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function myFunction() 
{
    var a = generateColor();
    document.getElementById("allcolor").style.backgroundColor = a;
}
setInterval("myFunction()", 200);