// 1st Question

var a="    Pawan";
var b="Kalyan    ";
var c=a.concat(b);
console.log(c);
var d=c.trim();
console.log(d);
var e=d.toUpperCase();
console.log(e);


// 2nd Question

var a1="Manikanta";
var b1=a1.slice(2,7);
console.log(b1);
var c1=b1.charAt(b1.length-1);
console.log(c1);
var d1=c1.toLowerCase();
console.log(d1);


// 3rd Question

var f="M";
var g="anikanta";
var h=f.concat(g);
console.log(f);
var i=h.toUpperCase();
console.log(i);
var j=i.slice(1,2);
console.log(j);


// 4th Question

var k="Manikanta";
var l="Thirnati";
var m=k.slice(0,3);
var n=l.slice(5,8);
var o=k.charAt(0).toUpperCase()+k.slice(1,3).concat(l.slice(5,7))+l.charAt(7).toUpperCase();
console.log(o);

// 5th Question

var p="    Manikanta    ";
var s=p.trim();
var t=s.charAt(0).toUpperCase()+s.slice(1,8)+s.charAt(8).toUpperCase();
console.log(t);


// 6th Question

var js="hello how are you";
var jss=js.split(" ");
console.log(jss);
var jsss=jss.indexOf("are");
console.log(jsss);

//  7th Question


var smartphone={
    brand: "samsung",
    model: "s23",
    price: "33k"
}

Object.seal(smartphone);
smartphone.price= "30k";
console.log(Object.isSealed(smartphone));

//  8th Question

var book={
    title:"Wings of Fire",
    author:"Rabindranath Tagore",
    publishedyear:2024
}

Object.freeze(book);
book.publishedyear=2025;
console.log(Object.isFrozen(book));

//  9th Question

var person={
    firstname:"Manikanta",
    lastname: "Thirnati",
    age:22
}

console.log(Object.keys(person),Object.values(person));

//  10th Question

var course={
    title:"Java Full Stack",
    instructor:"Vamsi Sir",
    duration:"6 Months"
}

console.log(Object.entries(course));

delete course.duration;
console.log(course);

// 11th Question

var employee={
    name:"Manikanta",
    position:"Software",
    salary:"120000"
}

Object.seal();
employee.position="Software Developer";
console.log(Object.keys(employee));
employee.age=22;
console.log(employee);

// 12th Question

var str="Manikanta";

var middlestr=str.slice(2,7);

console.log(middlestr.toUpperCase());

// 13th Question

var str1="Manikanta";
var str2=str1.toUpperCase();
console.log(str2);
var str3=str2.length;
console.log(str3);


// 14th Question

var str4="Manikanta";
var str5= str4.charAt(4);
console.log(str5);
var str6=str5.charCodeAt(0);
console.log(str6);



// 15th Question

var string="    Manikanta    ";
var trimstring=string.trim();
console.log(trimstring);
var extractstring=trimstring.slice(1,4);
console.log(extractstring);

// 16th Question

var firststr="Manikanta";
var secondstr="THIRNATI";
var secondstr1=secondstr.toLowerCase();
var totalstr=firststr.concat(secondstr1);
console.log(totalstr);

// 17th Question

var string1="    Manikanta    ";
var string2=string1.trim();
var string3=string2.slice(1);
console.log(string3);

// 18th Question

var string4="Manikanta";
var string5=string4.charAt(4);
var string6=string5.toUpperCase();
console.log(string6);

//  19th Question

var a1=5;
var b1=10;
var c1=20;

var d1=a1*b1+c1;
console.log(d1);
var result1=d1<=100;
console.log(result1);

// 20th Question 

var x1=8;
var y1=12;
var both=(x1>5 && y1<20);
console.log(both);


// 21st Question

var num1=25;
var num2=35;
var largenumber=(num1>num2)?num1:num2;
console.log(largenumber);

// 22nd Question

var m=15;
var n=10;
var division=m/n;
var subtraction=m-n;

if(division%2==0){
    console.log(division,"Evennumber");
}
else{
    console.log(division,"Oddnumber");
}
if(subtraction%2==0){
    console.log(subtraction,"Evennumber");
}
else{
    console.log(subtraction,"Oddnumber");
}

// 22rd Question

var age=18;
if(age==18){
    console.log(age,"Yes age is Equalto or Greaterthan Eighteen");
}
else{
    console.log(age,"No age is Not Equalto or Greaterthan Eighteen");
}

if(age===18){
    console.log(age,"Yes age is Equalto or Greaterthan Eighteen");
}
else{
    console.log(age,"No age is Not Equalto or Greaterthan Eighteen")
}