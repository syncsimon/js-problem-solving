const role = "admin"
const isLoggedIn = false

if (!isLoggedIn) {
    console.log("Please login")
} else {
    switch (role) {
        case "admin":
            console.log("Full access")
            break
        case "editor":
            console.log("Edit access")
            break
        case "viewer":
            console.log("View only")
            break
        default:
            console.log("No access")
    }
}
