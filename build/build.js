function add(n1, n2) {
    return n1 + n2;
}
var Character = (function () {
    function Character(props) {
        this.img = props.img;
        this.name = props.name;
        this.state = props.state;
        this.genre = props.genre;
        this.posX = props.posX;
        this.posY = props.posY;
        this.size = 100;
    }
    Character.prototype.draw = function () {
        image(this.img, this.posX, this.posY, this.size, this.size);
    };
    Character.prototype.clickOver = function () {
        if ((mouseX > this.posX && mouseX < this.size + this.posX) && (mouseY > this.posY && mouseY < this.size + this.posY)) {
            console.log(this.name);
        }
    };
    Object.defineProperty(Character.prototype, "setPosX", {
        set: function (newPos) {
            this.posX = newPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "setPosY", {
        set: function (newPos) {
            this.posY = newPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "getPosX", {
        get: function () {
            return this.posX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "getPosY", {
        get: function () {
            return this.posY;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
var characters = [];
function preload() {
}
function setup() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(function (raw) { return raw.json(); })
        .then(function (data) {
        console.log(data.results);
        var newInfo = data.results.map(function (char) {
            var info = {
                img: loadImage(char.image),
                name: char.name,
                state: char.status,
                genre: char.gender,
                posX: 0,
                posY: 0,
            };
            return new Character(info);
        });
        characters = newInfo;
        console.log(newInfo);
    });
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(255);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
            var currentValue = characters[j + (i * 5)];
            if (currentValue) {
                currentValue.setPosX = i * (currentValue.size + 10) + 200;
                currentValue.setPosY = j * (currentValue.size + 10) + 50;
                currentValue.draw();
                characters[0];
            }
        }
    }
}
function mousePressed() {
    characters.forEach(function (char) {
        char.clickOver();
    });
}
//# sourceMappingURL=build.js.map