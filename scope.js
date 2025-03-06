
var User = {
    FName : "Eric", Location : "Somewhere in australia", Age : 20,
    printInfo : function () {
        console.log(this); //scope is the User - object as printInfo executes over it
        console.log(this.FName);
    }
}

User.printInfo()