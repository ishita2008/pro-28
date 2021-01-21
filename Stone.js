class Stone{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.y=y
        this.x=x
        this.r=r
        this.r=r
        this.body=Bodies.circle(x,y,r/2,options)
       
        
        this.image=loadImage("images/stone.png")
        World.add(world,this.body);
    }
    display(){
       

    
    ellipseMode(CENTER)
        ellipse(this.x,this.y,this.r)
        imageMode(CENTER)
        image(this.image,240,425,50,50)
        
    
    }

}
