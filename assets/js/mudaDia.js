function mudaDia(idSection, idMenu) {
    var arraySection = new Array('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta',
        'sabado');
    var arrayMenu = new Array('0', '1', '2', '3', '4', '5', '6');
    s = document.getElementById(idSection)
    m = document.getElementById(idMenu)

    for (i = 0; i < arraySection.length; i++) {
        if (arraySection[i] == idSection) {
            s.style.opacity = '1';
            s.style.zIndex = '1';
            s.style.position = 'unset';
        } else {
            document.getElementById(arraySection[i]).style.opacity = '0';
            document.getElementById(arraySection[i]).style.zIndex = '0';
            document.getElementById(arraySection[i]).style.position = 'fixed';
        }
    }
    for (i = 0; i < arrayMenu.length; i++) {
        if (arrayMenu[i] == idMenu) {
            m.style.backgroundColor = '#FFB8B8';
            m.style.color = "white !important";
        } else {
            document.getElementById(arrayMenu[i]).style.backgroundColor = 'transparent';
        }
    }
}
