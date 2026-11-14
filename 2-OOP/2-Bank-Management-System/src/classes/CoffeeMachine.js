class CoffeeMachine {
    #heatWater() {
        console.log("Heating water...");
    }

    #brewCoffee() {
        console.log("Brewing coffee...");
    }

    makeCoffee() {
        this.#heatWater();
        this.#brewCoffee();

        console.log("Coffee is ready!");
    }
}

export default CoffeeMachine