var a;

    function hideCollapse(elementId) {
        if (a == 0){
            document.getElementById(elementId).style.display="inline";
            a=1;
        }
        else {
            document.getElementById(elementId).style.display="none";
            a=0;
        }
    }
