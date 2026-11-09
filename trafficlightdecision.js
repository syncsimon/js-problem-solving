const trafficSignal = "pink"
switch (trafficSignal){
    case "red":
        console.log("Stop!")
        break
    case "yellow":
        console.log("Get Ready")
        break
    case "green":
        console.log("Go")
        break
    default : 
        console.log("Invalid Input")
        break
}


function trafficSignal (signal){
    switch (signal){
    case "red":
        return "Stop!";
        break
    case "yellow":
        return "Get Ready";
        break
    case "green":
        return "Go";
        break
    default : 
        return "Invalid Input";
        break
}
}

let result = trafficSignal("yellow")
console.log(result)
function trafficSignals(time){
    switch (time){
        case "11pm":
            return
    }
}




