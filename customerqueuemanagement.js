// Perform the following operations in exactly this order:
// 1. A new customer, "Sneha", joins the end of the queue.
// 2. The first customer gets served and leaves the queue.
// 3. An urgent customer, "Vikram", gets priority and joins the beginning of the queue.
// 4. Another customer, "Neha", joins the end of the queue.
// 5. The next customer gets served and leaves the queue.
// 6. Print the final queue and the number of customers remaining.

let queue = ["Rahul", "Priya", "Aman"];
queue.push("sneha");  //A new customer, "Sneha", joins the end of the queue.
queue.shift();   //The first customer gets served and leaves the queue.
queue.unshift("vikram");  //An urgent customer, "Vikram", gets priority and joins the beginning of the queue.
queue.push("neha"); //Another customer, "Neha", joins the end of the queue.
queue.shift(); //// 5. The next customer gets served and leaves the queue.
console.log(queue); 
console.log(queue.length) //Print the final queue and the number of customers remaining.
console.log("hence this is customer queue management");
console.log("here we go into the")
