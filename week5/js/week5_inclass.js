// let product=[
//     {name:'바나나',price:1200},
//     {name:'사과',price:2000}
// ];

// product.push({name:'배',price:3000});

// let sum = 0;

// for (let i in product) {
//     console.log(product[i].name);
//     sum += product[i].price;
// }
// console.log(sum);

let ob={
    name:"바나나",
    price:1200,
    print:function(){
        console.log(this.name+" "+this.price);
    }
};
ob.print();