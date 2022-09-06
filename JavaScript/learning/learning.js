let createCar2 = function(color,model,seats){
    let car
}
let createCar = function(color,model,seats){
    return{
        color,
        model,
        seats,
        engineSize:1.5,
        speed:0,
        moveForward:function (speed){
            this.speed=speed
            console.log("speed FW: "+ this.speed)
        },

        moveBackward:function (speed){
            this.speed=speed
            console.log("speed BW: "+ this.speed)
        },

        stop: function(){
            this.speed=0;
        }
    }
}

let car = createCar("white", "Golf", 7)
console.log(car)
car.moveForward(50)
console.log(car)