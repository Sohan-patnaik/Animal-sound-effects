var n = document.querySelectorAll(".sound").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var animalClass = this.className; 
        click(animalClass);
        
        switch (animalClass) {
            case "dog":
                var audio1 = new Audio("sounds/dog.wav");
                audio1.play();
                break;
            case "kitty":
                var audio2 = new Audio("sounds/kitty.wav");
                audio2.play();
                break;
            case "horse":
                var audio3 = new Audio("sounds/horse.wav");
                audio3.play();
                break;
            case "monkey":
                var audio4 = new Audio("sounds/monkey.wav");
                audio4.play();
                break;
            case "wolf":
                var audio5 = new Audio("sounds/wolf.mp3");
                audio5.play();
                break;
                case "lion":
                var audio6 = new Audio("sounds/lion.wav");
                audio6.play();
                break;
            default:
                console.log("No sound available for this animal.");
        }
    });
}
function click(clicked){
  var press=  document.querySelector("."+clicked);
        press.classList.add("pressed");


}


