        document.body.style.backgroundColor = "black";
        document.title = "Change the Background Color";

        var button = document.getElementById("color");

        button.onclick = function(){
            document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }; 