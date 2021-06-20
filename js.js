function change(lang){
    switch(lang){
        case 'PL':
            loc = "./src/Maciej Wojdyła_CV.pdf";
            break;
        case 'EN':
            loc = "./src/Maciej Wojdyła_CV_ENG.pdf";
    }
    document.getElementById('frame').src = loc;
}