class House {
    constructor(color) {
        this.color =  color;
    }

    getFurniture() {
        return 'sofa';
    }
}

const houseObject = new House('red');
const houseObject2 = new House('pink');

console.log(houseObject);
console.log(houseObject.getFurniture());

console.log(houseObject2);
console.log(houseObject2.getFurniture());