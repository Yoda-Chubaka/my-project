var image;
var greyImage;
var fgImage = null;
var bgImage = null;
var canvasFg;
var canvasBg;

function upload() {
    var imgCanvas = document.getElementById("canvas1");
    var fileInput = document.getElementById("input-file");
    image = new SimpleImage(fileInput);
    
    image.drawTo(imgCanvas);
    // greyImage.drawTo();
}

function makeGrey() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgCanvas = document.getElementById("canvas2");
    var fileInput = document.getElementById("input-file");
    greyImage = new SimpleImage(fileInput);
    image.drawTo(imgCanvas);
}


function loadForegroundImage() {
    var imgFile = document.getElementById("fgFile");
    fgImage = new SimpleImage(imgFile);
    canvasFg = document.getElementById("fgCan");
    fgImage.drawTo(canvasFg);
}

function loadBackgroundImage() {
    var imgFile = document.getElementById("bgFile");
    bgImage = new SimpleImage(imgFile);
    canvasBg = document.getElementById("bgCan");
    bgImage.drawTo(canvasBg);
}

function doGreenScreen() {
    if (fgImage === null || ! fgImage.complete()) {
        alert("Foreground not loaded");
    }
    if (bgImage === null || ! bgImage.complete()) {
        alert("Background not loaded");
    }
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
    var greenThreshold = 240;
        for (var pixel of fgImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold) {
            var bgPixel = bgImage.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        }
        else {
            output.setPixel(x, y, pixel);
        }
    }
    output.drawTo(canvasBg);
}

function clearCanvas() {
    var contextFg = canvasFg.getContext("2d");
    contextFg.clearRect(0, 0, canvasFg.width, canvasFg.height);
    var contextBg = canvasBg.getContext("2d");
    contextBg.clearRect(0, 0, canvasBg.width, canvasBg.height);
}


