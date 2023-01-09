function texte(option) {
    // var f = new XMLHttpRequest();
    // f.open("GET", "Propos.txt", false);
    // var leTexte = "===";
    // f.onreadystatechange = function () { 
    //     document.getElementById("texte").innerHTML = f.responseText; 
    // }

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", option + ".txt", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                allText = allText.split("\n").join("<br>");
                document.getElementById("paragraphe").innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}

let colorOui = "#DFD";
let colorNon = "#CCC";

let colorL1 = colorOui;
let colorL2 = colorNon;
let colorL3 = colorNon;

function refreshLiens() {
    document.getElementById("l1").style.color = colorL1;
    if (colorL1 == colorOui) { document.getElementById("l1").style.borderBottomStyle = "solid"; }
    else { document.getElementById("l1").style.borderBottomStyle = "hidden"; }
    
    document.getElementById("l2").style.color = colorL2;
    if (colorL2 == colorOui) { document.getElementById("l2").style.borderBottomStyle = "solid"; }
    else { document.getElementById("l2").style.borderBottomStyle = "hidden"; }
    
    document.getElementById("l3").style.color = colorL3;
    if (colorL3 == colorOui) { document.getElementById("l3").style.borderBottomStyle = "solid"; }
    else { document.getElementById("l3").style.borderBottomStyle = "hidden"; }
}

window.onload = function() { 
    texte('Propos');

    // 1111111111
    document.getElementById("l1").onclick = function() { 
        colorL1 = colorOui; colorL2 = colorNon; colorL3 = colorNon;
        refreshLiens();
        texte('Propos');
        document.getElementById("paragraphe").style.textAlign = "inherit";
    }
    document.getElementById("l1").onmouseover = function() { 
        document.getElementById("l1").style.color = colorOui;
        document.getElementById("l1").style.borderBottomStyle = "solid";
    }
    document.getElementById("l1").onmouseleave = function() { 
        refreshLiens();
    }

    // 2222222222
    document.getElementById("l2").onclick = function() { 
        colorL1 = colorNon; colorL2 = colorOui; colorL3 = colorNon; 
        refreshLiens();
        texte('Services');
        document.getElementById("paragraphe").style.textAlign = "inherit";
    }
    document.getElementById("l2").onmouseover = function() { 
        document.getElementById("l2").style.color = colorOui;
        document.getElementById("l2").style.borderBottomStyle = "solid";
    }
    document.getElementById("l2").onmouseleave = function() { 
        refreshLiens();
    }

    // 3333333333
    document.getElementById("l3").onclick = function() { 
        colorL1 = colorNon; colorL2 = colorNon; colorL3 = colorOui; 
        refreshLiens();
        texte('Contactez');
        document.getElementById("paragraphe").style.textAlign = "center";
    }
    document.getElementById("l3").onmouseover = function() { 
        document.getElementById("l3").style.color = colorOui;
        document.getElementById("l3").style.borderBottomStyle = "solid";
    }
    document.getElementById("l3").onmouseleave = function() { 
        refreshLiens();
    }

    refreshLiens();
}