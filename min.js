var a;

    function hideCollapse(elementId) {
        if (a == 1){
            document.getElementById(elementId).style.display="none";
            a=0;
        }
        else {
            document.getElementById(elementId).style.display="inline";
            a=1;
        }
    }
