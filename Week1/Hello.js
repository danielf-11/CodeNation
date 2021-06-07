//Get name
let Output = "Hello World" ;
let name = "a";

console.log(Output);
console.log("What is your name?");
GetName.call(name);
console.log(`hello ${name}`)

    
function GetName (nameee){
console.log("Getting name not sure how to yet");
return nameee;
}

/*
for (var test = 0; test <=3; test++){
    console.log(test)
    }

*/