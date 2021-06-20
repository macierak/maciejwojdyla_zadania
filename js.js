function change(lang){
    switch(lang){
        case 'PL':
            loc = "./src/Maciej Wojdyła_CV.pdf";
            break;
        case 'EN':
            loc = "./src/Maciej Wojdyła_CV_ENG.pdf";
            break;
        case 'tabela':
            loc = "./Tabela.html";
            break;
        case 'css1':
            loc = "./16.04/index1.html";
        break;
        case 'css2':
            loc = "./CSS/index1.html";
        break;
        case 'css3':
            loc = "./CSS/index2.html";
        break;
        case 'css4':
            loc = "./CSS/index3.html";
        break;
        case 'css5':
            loc = "./cssuczelnia1/index.html";
        break;
        case 'js1':
            loc = "./js1/index.html";
        break;
        case 'js2':
            loc = "./js2/index.html";
        break;
        case 'js3':
            loc = "./js3/index.html";
        break;
        case 'js4':
            loc = "./js4/index.html";
        break;
        case 'div':
            loc = "./23.04/index.html";
        break;
        case 'xml':
            loc = "./xmlcw/index1.html";
        break;

    }
    document.getElementById('frame').src = loc;
}