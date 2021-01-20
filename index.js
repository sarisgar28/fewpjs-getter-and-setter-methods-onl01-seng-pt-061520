// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius;
    }
     get circumference(){
        return 2 * Math.PI * `${this.radius}`;
     }
     get diameter(){
         return 2 * `${this.radius}`;
     }
    get area(){
        return `${this.radius}` * `${this.radius}` * Math.PI;
    }
    set diameter(newDiameter){
         this.radius = newDiameter / 2

    }
    set circumference(newCircumference){
         this.radius = newCircumference / (2 * Math.PI)
    }

    
}