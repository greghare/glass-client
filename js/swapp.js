var apps = document.getElementsByClassName("app");
var appContainer = document.getElementsByTagName("body");
var curApp = 1;
var margin = 0;

function init() {
    apps[0].style.transform = "scale(1.0, 1.0)";
    window.focus();
}

function goTo(appID) {
    if(appID < apps.length || appID > 0)
    {
        apps[(curApp - 1)].style.transform = "scale(0.8, 0.8)";
        window.setTimeout(function() {
            curApp = appID;
            margin = "-" + (curApp - 1) * 100;
            appContainer[0].style.marginTop = margin + "vh";
            window.setTimeout(function() {
                apps[(curApp - 1)].style.transform = "scale(1.0, 1.0)";
            }, 200);
            console.log("margin: " + margin + " curApp: " + curApp);
        }, 200);
    }
}

function next() {
    if(curApp < apps.length)
    {
        apps[(curApp - 1)].style.transform = "scale(0.8, 0.8)";
        window.setTimeout(function() {
            curApp += 1;
            margin = "-" + (curApp - 1) * 100;
            appContainer[0].style.marginTop = margin + "vh";
            window.setTimeout(function() {
                apps[(curApp - 1)].style.transform = "scale(1.0, 1.0)";
            }, 200);
            console.log("margin: " + margin + " curApp: " + curApp);
        }, 200);
    }
}

function previous() {
    if(curApp > 1)
    {
        apps[(curApp - 1)].style.transform = "scale(0.8, 0.8)";
        window.setTimeout(function() {
            curApp -= 1;
            margin = "-" + (curApp - 1) * 100;
            appContainer[0].style.marginTop = margin + "vh";
            window.setTimeout(function() {
                apps[(curApp - 1)].style.transform = "scale(1.0, 1.0)";
            }, 200);
            console.log("margin: " + margin + " curApp: " + curApp);
        }, 200);
    }
}


var ctrlKeyPressed = false;

document.onkeydown = checkKey;
document.onkeyup = removeKeyFlags;

function removeKeyFlags(e) {

    e = e || window.event;

    if(e.keyCode == '17') {
        // ctrl key released
        console.log("ctrl released");
        ctrlKeyPressed = false;
    }
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '17') {
        // ctrl key pressed
        console.log("ctrl pressed");
        ctrlKeyPressed = true;
    }

    if (e.keyCode == '66' && ctrlKeyPressed) {
        // up arrow
        previous();
        console.log("back (b)");

    }
    else if (e.keyCode == '78' && ctrlKeyPressed) {
        // down arrow
        next();
        console.log("next (n)");
    }
    else if (e.keyCode == '49' && ctrlKeyPressed) {
       // left arrow
        goTo(1);
        console.log("1");

    }
    else if (e.keyCode == '50' && ctrlKeyPressed) {
       // right arrow
        goTo(2);
        console.log("2");

    }
    else if (e.keyCode == '51' && ctrlKeyPressed) {
       // right arrow
        goTo(3);
        console.log("3");

    }
    else if (e.keyCode == '52' && ctrlKeyPressed) {
       // right arrow
        goTo(4);
        console.log("4");

    }

}
