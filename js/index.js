var image;

function upload() {
    var imgCanvas = document.getElementById("canvas1");
    var fileInput = document.getElementById("input-file");
    // var fileName = fileInput.value;
    // alert("Chose" + fileName);
    image = new SimpleImage(fileInput);
    image.drawTo(imgCanvas);
}

function makeGrey() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgCanvas = document.getElementById("canvas2");
    image.drawTo(imgCanvas);
}