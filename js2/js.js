function previewPic(sel){
    document.previewpic.src = "" + sel.options[sel.selectedIndex].value;
}
function showPic(sel){
    images = new Array();
    images[0] = "./1.jpg";
    images[1] = "./2.jpg";
    images[2] = "./3.jpg";
    images[3] = "./4.jpg";
    images[4] = "./5.jpg";
    window.location.href = images[sel.selectedIndex +1];
}