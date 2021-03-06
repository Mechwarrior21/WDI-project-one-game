var Bullet = function(x,y, type) {
    
    // Bullet position
    this.position = {
        "x": x,
        "y": y
    }
    
    var speed = 20;
    this.element = null;
    var type = type;
    
    var self = this;

    // Bullet creation
    var create = function () {

        self.element = document.createElement("div");
        self.element.classList.add("bullet");
        self.element.classList.add(type);

        self.element.style.top = self.position.y + "px";
        self.element.style.left = self.position.x + "px";

        var gameBoard = document.getElementById("board");
        gameBoard.appendChild(self.element);
    }

    // Rendering bullets for player and enemies
    this.render = function(){
        if(type == "player") {
            self.position.y -= speed;
        }else{
            self.position.y += speed;
        }
        self.element.style.top = self.position.y + "px";
    }

    create();
}