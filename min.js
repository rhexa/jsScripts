
            var accordion = [];
            var a;

            function hideCollapse(elementId, collapse) {
                if (accordion.length == 0) {
                    console.log("added " + elementId);
                    if (collapse == true) {
                        document.getElementById(elementId).style.display="none";
                        accordion.push([elementId, false]);
                    }
                    else {
                        document.getElementById(elementId).style.display="inline";
                        accordion.push([elementId, true]);
                    }
                }
                    
                else {
                    var i;
                    var found = false;
                    for (i=0; i<accordion.length; i++){
                        if (accordion[i][0] == elementId) {
                            console.log("ID Found");
                            found = true;
                            if (accordion[i][1] == true){
                                document.getElementById(elementId).style.display="none";
                                accordion[i][1]=false;
                                break;
                            }
                            else {
                                document.getElementById(elementId).style.display="inline";
                                accordion[i][1]=true;
                                break;
                            }
                        }
                    }
                    if (!found){
                        console.log("Not found " + elementId);
                        if (collapse == true) {
                            document.getElementById(elementId).style.display="none";
                            accordion.push([elementId, false]);
                        }
                        else {
                            document.getElementById(elementId).style.display="inline";
                            accordion.push([elementId, true]);
                        }
                        found = false;
                    }
                }   
            }
