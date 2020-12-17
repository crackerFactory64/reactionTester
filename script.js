var creation; //Variable to store the time at which the shape appeared

var click; //Variable to store the time the shape was clicked on          

var hiScore = 10;

function getRandomColor() {

        var letters = '0123456789ABCDEF';

        var color = '#';

        for (var i = 0; i < 6; i++) {

            color += letters[Math.floor(Math.random() * 16)];

        }

        return color;

}

function calculateTime(a,b){

    var timeDifference = (b - a) / 1000;

    if (timeDifference < hiScore){

        hiScore = timeDifference;

    }


    document.getElementById("time").innerHTML = "Your time: " + timeDifference + " seconds";

    document.getElementById("hiScore").innerHTML = "Best time: " + hiScore + " seconds";

}


function createShape(){

    if(Math.random() > 0.5){

            document.getElementById("shape").style.borderRadius = "50%";

    } else {

            document.getElementById("shape").style.borderRadius = "0%";

    };               

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.left = Math.floor(Math.random() * 1150) + "px";

    document.getElementById("shape").style.top = Math.floor(Math.random() * 550) + "px";  

    document.getElementById("shape").style.height = Math.floor(Math.random() * 100) + 150 + "px";

    document.getElementById("shape").style.width = Math.floor(Math.random() * 100) + 150 + "px";

    creation = new Date();

    document.getElementById("shape").style.display = "block";      


    }


document.getElementById("startButton").onclick = function(){          

    document.getElementById("startButton").style.display = "none";    

    setTimeout(function(){

        createShape()}, Math.random() * 1000);

    }             


document.getElementById("shape").onclick = function(){     

    click = new Date();        

    calculateTime(creation, click);

    document.getElementById("shape").style.display = "none";                                                                                                                                    

    setTimeout(function(){

        createShape()}, Math.random() * 1000);

    }           

