    function problemClicked(problemNum) {
        for (var i=1; i<=10; i++) {
            document.getElementById("Problem"+ i).className = "CodeGolfProblem ProblemMenuItem";
        }
        
        var newProblem = document.getElementById("Problem"+ problemNum);
        newProblem.className = "CodeGolfProblem ProblemSelected";
    }

    function tabClicked(tabNum) {
        for (var i=1; i<=3; i++) {
            document.getElementById("Tab"+ i).className = "CodeGolfTab InactiveTab";
            document.getElementById("Body"+ i).className = "CodeGolfBody InactiveBody";
        }
        
        var newTab = document.getElementById("Tab"+ tabNum);
        var newBody =  document.getElementById("Body"+ tabNum);
        newTab.className = "CodeGolfTab ActiveTab";
        newBody.className = "CodeGolfBody ActiveBody";
    }
