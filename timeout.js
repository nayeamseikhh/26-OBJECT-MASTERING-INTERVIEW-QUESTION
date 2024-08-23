function doSomething(){
    console.log("this is last time out line");
}
setInterval(function(){
    console.log("This is interval loop for javascript");
}, 5000) 

console.log(22222);
setTimeout(doSomething, 3000);
console.log(55555);
console.log(66666);

//stop for press ctrl + C ;

