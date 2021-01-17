class Polygon extends BaseClass
{
    constructor(x,y,radius)
    {
        super(x,y,50,50)
        this.body = Bodies.circle(50,200,20)
        this.image = loadImage("sprites/polygon.png")
        
    }
    /*display() 
    {
        super.display();
    }
    
}*/}
