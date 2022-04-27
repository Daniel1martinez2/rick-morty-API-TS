type CharacterType = {
  img: p5.Image;
  name: string;
  state: string;
  genre: string;
  posX: number;
  posY: number;
}

class Character{
  //define the types here
  public img: p5.Image;
  public name: string;
  public state: string;
  public genre: string;
  public posX: number;
  public posY: number;

  constructor(props:CharacterType){
    this.img = props.img;
    this.name = props.name;
    this.state = props.state;
    this.genre = props.genre;
    this.posX = props.posX;
    this.posY = props.posY;
  }

  draw():void{
    image(this.img, this.posX, this.posY, 20, 20)
  }

  clickOver(){    
    if((mouseX > this.posX && mouseX < 20+this.posX) && (mouseY > this.posY && mouseY < 20+  this.posY)){
      console.log(this.name)
    }
  }

  set setPosX(newPos: number){
    this.posX = newPos;
  }

  set setPosY(newPos: number){
    this.posY = newPos;
  }

  get getPosX(){
    return this.posX
  }

  get getPosY(){
    return this.posY
  }
}