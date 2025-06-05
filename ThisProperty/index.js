const obj = {
    name: "Sandeep",
    normalMethod: function(){
        console.log(`1: ${this.name}`);
        // "1: Sandeep" as this refers to the obj as it has been called via obj.normalMethod();

        function innerNormal1(){
            console.log(`inner NormalMethod1: ${this.name}`);
        }
        // "inner NormalMethod1: undefined" because function is not bind to any obj

        const innerArrow1 = () => {
            console.log(`inner Arrow Method1: ${this.name}`);
        }
        // "inner Arrow Method1: Sandeep" because arrow function looks for its global scope this

        innerNormal1();
        innerArrow1();
    },
    // All will give undefined as its global scope do not have name proeprty.
    arrowMethod: () => {
        console.log(`2: ${this.name}`);

        function innerNormal2(){
            console.log(`inner NormalMethod2: ${this.name}`);
        }

        const innerArrow2 = () => {
            console.log(`inner Arrow Method2: ${this.name}`);
        }

        innerNormal2();
        innerArrow2();
    }
}

obj.normalMethod();
obj.arrowMethod();

// NOTE: this in normal method refers to the obj which is bind/attach to it
// NOTE: this in arrow method refers to its global scope.