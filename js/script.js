function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! Are you ready to game ?)";
    document.getElementById("demoo").innerHTML = person;
  }
}

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. Your Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
function getSubject(d)
{
    localStorage.setItem("subject", d.getAttribute("data-name"));
}

function getDifficulty(d)
{
    localStorage.setItem("difficulty", d.getAttribute("data-name"));
}

function getPage(){
    window.location.href = "pages/"+localStorage.getItem('subject')+"/"+localStorage.getItem('difficulty')+"/index.html";
}
$(window).load(function(){
    if($("body").load("loader.html").fadeOut(5000)){
        $("loader.html").hide();
        $("index.html").show();
    }
});