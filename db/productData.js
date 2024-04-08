class Bird {
    constructor(name, species, migration, price){
        this.name = name
        this.species = species
        this.migration = migration
        this.price = price
    }
}

const birds = [
    new Bird("Blue Jay", "Bird", "true", 50),
    new Bird("Pigeon", "Bird", "true", 50),
    new Bird("Swan", "Bird", "true", 50),
    new Bird("Duck", "Bird", "true", 50),
    new Bird("Robiny", "Bird", "true", 50)
]
module.exports = birds