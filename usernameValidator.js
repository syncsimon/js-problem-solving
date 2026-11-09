const users = [
    "simon123",
    "john",
    "alex_45",
    "ab",
    "developer99"
];

const validUsername = [];
for(let i = 0; i< users.length;i++){
    if(users[i].length >= 5){
        validUsername.push(users[i]);
    }
}
console.log(validUsername);
const validusernameTotal = validUsername.length
const invalidUsername = users.length - validusernameTotal
console.log(invalidUsername);

