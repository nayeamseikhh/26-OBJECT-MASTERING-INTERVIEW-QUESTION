    const normalParson = { firstName: 'Rahim',lastName: 'Uddin',salary: 1500,
        // getFullName: function(){
        //     console.log(this.firstName, this.lastName);
        // },
        chargeBill: function(amount, tips, tax){
            this.salary = this.salary - amount - tips - tax;
            return this.salary;
        }
    }
    const heroParson = {firstName: "hero", lastName: "Balam", salary: 25000};
    const firndlyParson = {firstName: "Hero", lastName: "Golam", salary: 35000};

        //bind..

    // const heroChargeBill = normalParson.chargeBill.bind(heroParson);
    // const frindlyChargeBill = normalParson.chargeBill.bind(firndlyParson);

    // heroChargeBill(2000);
    // frindlyChargeBill(3400);
    // console.log(normalParson);
    // console.log(heroParson);
    // console.log(firndlyParson);

            // call = ,
            
    // normalParson.chargeBill.call(heroParson, 900, 500 , 45);
    // normalParson.chargeBill.call(heroParson, 3000, 200, 40);
    // console.log(heroParson);


    // normalParson.chargeBill.call(firndlyParson, 3300, 500 , 45);
    // normalParson.chargeBill.call(firndlyParson, 3000, 500 , 45);
    // console.log(firndlyParson);
    
        //apply = array
    normalParson.chargeBill.apply(heroParson, [1200, 450, 50]);
    console.log(heroParson);