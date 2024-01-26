function upload() {
    var imgCanvas = document.getElementById("canvas1");
    var fileInput = document.getElementById("input-file");
    // var fileName = fileInput.value;
    // alert("Chose" + fileName);
    var image = new SimpleImage(fileInput);
    image.drawTo(imgCanvas);
}