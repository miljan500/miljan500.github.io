var y=document.getElementById('icons1');
y=y.getElementsByTagName('div');
x1=y[0];
x1.addEventListener("mouseover",f1)
//x1.addEventListener("mouseout",f1_)
x2=y[1];
x2.addEventListener("mouseover",f2)
//x2.addEventListener("mouseout",f2_)
x3=y[2];
x3.addEventListener("mouseover",f3)
//x3.addEventListener("mouseout",f3_)

function f1()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[0].style.color="#FFD000";
a=document.getElementById('swordsman');
a.style.display="block";
f2_();
f3_();
}

function f1_()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[0].style.color="#CCC";
a=document.getElementById('swordsman');
a.style.display="none";
}

function f2()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[1].style.color="#FF0000";
a=document.getElementById('fighter');
a.style.display="block";
f1_();
f3_();
}

function f2_()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[1].style.color="#CCC";
a=document.getElementById('fighter');
a.style.display="none";
}

function f3()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[2].style.color="#00AEFF";
a=document.getElementById('wizard');
a.style.display="block";
f1_();
f2_();
}

function f3_()
{
var a=document.getElementById('icons1');
var b=a.getElementsByTagName('p');
b[2].style.color="#CCC";
a=document.getElementById('wizard');
a.style.display="none";
}