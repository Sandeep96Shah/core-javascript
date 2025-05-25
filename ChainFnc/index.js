// console.log(computeAmount().lacs(45).crore(10).lacs(5).crore(9).value());


function computeAmount(){
    this.totalAmount = 0;

    this.lacs = (amount) => {
        const value = amount * 100000;
        this.totalAmount += value;
        return this;
    }

    this.crore = (amount) =>{
        const value = amount * 10000000;
        this.totalAmount += value;
        return this;
    }

    this.value = () => {
        return this.totalAmount;
    }
    return this;
}

console.log(computeAmount().lacs(45).crore(10).lacs(5).crore(9).value())