let UserName = prompt("Whos there? :");
if (UserName === ("Admin") {
    let enteredPassword = prompt("Password:");
    if (enteredPassword === "TheMaster") {
        document.getElementById("demo").innerHTML = "Admin Successful";
        alert("Welcome!");
    }
    else if (enteredPassword === "" || null) {
        alert("Cancelled");
        document.getElementById("demo").innerHTML = "Cancelled";
    }
    else {
        alert("Wrong Password");
        document.getElementById("demo").innerHTML = "Wrong Password";
    }
}
else if (UserName === "" || null) {
    alert("Cancelled,");
    Document.getElementById("demo").innerHTML = "no username";
}
else {
    alert("Could'nt find an account under this name.\n
     for help contact support.")
    document.getElementById("demo").innerHTML = "unregistered";
}