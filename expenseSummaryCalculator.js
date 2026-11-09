const expenses = [
    { amount: 15000, category: "Groceries" },
    { amount: 12000, category: "Clothing" },
    { amount: 30000, category: "Trip" },
    { amount: 5000, category: "Shopping" },
    { amount: 2000, category: "Subscriptions" },
    { amount: 35000, category: "Investments" },
    { amount: 3000, category: "Groceries" },
    { amount: 8000, category: "Trip" },
    { amount: 2500, category: "Shopping" },
    { amount: 4000, category: "Clothing" },
    { amount: 1000, category: "Subscriptions" },
    { amount: 5000, category: "Groceries" },
    { amount: 15000, category: "Investments" },
    { amount: 2000, category: "Trip" }
];
//total spendings
function calculateSpending(expenses){
    let totalExpenses = 0;
    for(let i = 0; i<expenses.length ; i++){
        totalExpenses += expenses[i].amount;
    }
    return totalExpenses;
}

const result = calculateSpending(expenses);
console.log(`Total Spendings are : ${result}`);

// calculate by category

const uniqueCategory = [];
for(let i = 0; i<expenses.length ; i++){
    if(uniqueCategory.includes(expenses[i].category)){
        continue;
    }
    else{
        uniqueCategory.push(expenses[i].category);
    }
}

console.log(uniqueCategory);

for(let j = 0 ; j< uniqueCategory.length ; j++){
    
//      let totalIndividual = 0;
//             totalIndividual += expenses[i].amount;
//             console.log(`category : ${expenses[i].category} , amount : ${totalIndividual}`)
//         }
//         else{
//             console.log("nothing matches")
//         }
//     }


// // console.log(uniqueCategory);



// // console.log(` Category : ${expenses[i].category} and total amount spent : ${expenses[i].amount}`);