var txt= "abdcefghijklmnopqrstuvwxyz";
var txt1= txt.length;
var txt2= txt.slice(0,4);
console.log(txt2);
var txt3= "Come visit Microsoft!";
var txt4= txt3.replace("Microsoft", "BGU");
console.log(txt4);

//var person= {
    //firstName= "Alma",
    //lastName= "Shacham",
   // function= fullName(); //הפעלת פונקציה בתוך אובייקט
//}

const d= new Date();
console.log(d);
var h= d.getHours();
console.log(h);

if (h<12){
    greeting = "good morning!";
}else if (h< 17) {
    greeting = "good afternoon!";
} 
else {
    greeting = "good evening!";
};
console.log(greeting);

//document.getElementById("P").innerHTML= greeting; //אם נעשה רק ככה זה יעשה שגיאה כי זה קורה את ההצהרה על עמוד בשורה 4 ואז הוא לא מכיר את האלמנט פי שקורה רק בשורה 9 לכן נכניס לפונקציה

function greet(){
    document.getElementById("P").innerHTML= greeting;
};

var cars= ["toyota","honda", "ford"];
console.log(cars[0]);
console.log(cars[1]);

var i;
for (i=0; i<cars.length; i++) {
    console.log(cars[i]);
}