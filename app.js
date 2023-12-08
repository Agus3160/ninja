class Ninja{
    constructor(nombre, salud, velocidad=3, fuerza=3){
        this.name = nombre;
        this.health = salud;
        this.speed = velocidad;
        this.strength = fuerza;
    }

    sayName(){
        console.log(`Mi nombre es ${this.name}`);
    }

    showStats(){
        console.log(`Nombre: ${this.name}, Salud: ${this.health}, Velocidad: ${this.speed}, Fuerza: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
