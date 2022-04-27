
let characters:Character[] = [];

function preload(){
  
}

function setup() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(raw => raw.json())
    .then(data => {
      console.log(data.results)
      const newInfo:Character[] = data.results.map((char:any) => {
        const info: CharacterType = {
          img: loadImage(char.image),
          name: char.name,
          state: char.status,
          genre: char.gender,
          posX: 0,
          posY: 0,
        };
        return new Character(info)
      })
      characters = newInfo;
      console.log(newInfo)
    })
  
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  background(255);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      const currentValue = characters[j + (i*5)];
      if(currentValue){
        currentValue.setPosX = i*20 + 200;
        currentValue.setPosY = j*20 + 50;
        currentValue.draw()
        characters[0]
      }
    }
    
  }

}

function mousePressed(){
  characters.forEach(char => {
    char.clickOver();
  }) 
}