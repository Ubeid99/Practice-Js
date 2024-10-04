
// Eventlistener in js

// exampel

function attach(){
let count = 0;
// this document is one of web api for getting acces to html code for giving event using eventlistner
document.getElementById("btnoo").addEventListener("click", function xyz() {
            console.log("Button Clicked" , ++count);
});
}
attach();

// we made a button in html and gave button an id this id we got in our js code by document becouse js is DOM using language.
// after that we get the id of button and use the eventlistener.

// In summury eventlistener are use for giving event to selected id by callback function and typing name of event that we wish to give.

// and for count the event we used globel variable count and declared in console of function xyz and all document function we pasted in new function and document noe in a local scope of attach function.
// that's why globle variabel is now in a local scope of attach function and it cannot be use in other event or anywere.





// Callback queue or Task queue in event loop 

console.log("start here");
// first this will print by globel exicution contaxt.

// this settimeout is also one of web api for giving timer in js code exicution.
// this will print after 5sec.
setTimeout(() => {
    console.log("callback queue works here")
}, 5000);
// now after 5sec this will print but not in a globel exicution contaxt becouse globel contaxt is poped out of the call stack.
// so now event loop will apear here and use the callback queue for exicuting this timer function after 5sec this is one of the fecher of brosers js engine.

// IMP this callbackqueue is uses for all thing like events and methods ex.mouse events whene we click then print but globel contaxt is allready poped out before we click and than callback queue apear and print after click.

// second this will print in globel exicution contaxt 
console.log("end here");



// microtask queue in event loop

// this is just an exampel api is not working but we can fetch api like that using promise  and microtask queue.

// callbacks that are used by promises and mutation observer(changing in html code and than change in js) this tow callbacks are comes to microtask queue instead of callback queue.
// microtask queue gets priority over callback or task queue it means microtask exicute first.
console.log("start");

fetch("https://api.netflic.com")
.then(() => {
    console.log("api print using microtask qeueu");
});

console.log("end");




// this event is use for stop the time or blocking the main thread. 

// newdate metod is use for getting current date and with gettime event we can have current time with min , sec and even milisec.
let startDate = new Date().getTime();
let endDate = startDate;
while( endDate < startDate + 5000) {
    endDate = new Date().getTime();
}
// after this event loop consol will stops for 5sec and than print this and than rest of the code will be printed.

console.log("time stops 10sec");