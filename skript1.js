function oboji1()
{
var a=document.getElementsByTagName("main");
var b=a[0].querySelectorAll("p")
var n=document.fr1.num1.value;
b[n].style.color=document.fr1.c1.value;
b[n].style.textAlign=document.fr1.s1.value;

if(document.fr1.cb1.checked==true)
{
	b[n].style.borderStyle="solid";
	b[n].style.borderWidth="3px";
	b[n].style.borderColor=document.fr1.c1.value;
}

if(document.fr1.cb2.checked==true)
	b[n].style.textShadow="2px 2px 2px "+document.fr1.c1.value;
if(document.fr1.cb3.checked==true)
	b[n].style.boxShadow="10px 10px 10px "+document.fr1.c1.value;
}

function oboji2()
{
if(document.fr1.s2.selectedIndex==0)
{
	var x=document.getElementsByClassName("p2");
	x[0].style.color=document.fr1.c2.value;
	var x=document.getElementsByClassName("p5");
	x[0].style.color=document.fr1.c2.value;
}
if(document.fr1.s2.selectedIndex==1)
{
	var x=document.getElementsByClassName("p3");
	x[0].style.color=document.fr1.c2.value;
	var x=document.getElementsByClassName("p4");
	x[0].style.color=document.fr1.c2.value;
}
if(document.fr1.s2.selectedIndex==2)
{
	var x=document.getElementsByClassName("p1");
	x[0].style.color=document.fr1.c2.value;
	var x=document.getElementsByClassName("p4");
	x[0].style.color=document.fr1.c2.value;
}
}

function prikazi()
{
var a=document.getElementsByTagName("main");
var b=a[0].getElementsByTagName("img");
if(b.length>1)
	b[1].remove();
if(document.fr2.s3.selectedIndex==0)
{
	var x=document.createElement("img");
	x.setAttribute("src","slike/s1.png");
	x.setAttribute("width","95%");
	document.fr2.fs2.appendChild(x);
}
if(document.fr2.s3.selectedIndex==1)
{
	var x=document.createElement("img");
	x.setAttribute("src","slike/s2.png");
	x.setAttribute("width","95%");
	document.fr2.fs2.appendChild(x);
}
if(document.fr2.s3.selectedIndex==2)
{
	var x=document.createElement("img");
	x.setAttribute("src","slike/s3.png");
	x.setAttribute("width","95%");
	document.fr2.fs2.appendChild(x);
}
if(document.fr2.s3.selectedIndex==3)
{
	var x=document.createElement("img");
	x.setAttribute("src","slike/s4.png");
	x.setAttribute("width","95%");
	document.fr2.fs2.appendChild(x);
}
if(document.fr2.s3.selectedIndex==4)
{
	var x=document.createElement("img");
	x.setAttribute("src","slike/s5.png");
	x.setAttribute("width","95%");
	document.fr2.fs2.appendChild(x);
}
if(document.fr2.s3.selectedIndex==-1)
{
	alert("Izaberite stavku iz liste naziva slika");
}
}


function datum1()
{
var d=new Date();
var a=d.getHours();
var b=d.getMinutes();
var c=d.getSeconds();
var s=a+":"+b+":"+c;
document.fr1.tb1.value=s;
}

function datum2()
{
var m=16;
var d=new Date();
var a=d.getHours();
var b=d.getMinutes();
var c=d.getSeconds();
if(a>=m)
	a-=m;
else
	a=24-(m-a);
var s=a+":"+b+":"+c;
document.fr1.tb2.value=s;
}

function datum3()
{
var m=5;
var d=new Date();
var a=d.getHours();
var b=d.getMinutes();
var c=d.getSeconds();
if(a>=m)
	a-=m;
else
	a=24-(m-a);
var s=a+":"+b+":"+c;
document.fr1.tb3.value=s;
}


function oboji4()
{
var a=document.getElementsByTagName("main");
var b=a[0].getElementsByTagName("label");
var x=b[3];
  var a=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  var c=Math.floor(Math.random()*256);
  x.style.color='rgb('+a+','+b+','+c+')';
  x.innerText="Ovo je paragraf koji menja boju.";
  
 if(document.fr1.cb1.checked==true)
	x.innerHTML="<b>"+x.innerText+"</b>";
 if(document.fr1.cb2.checked==true)
	x.innerHTML="<i>"+x.outerHTML+"</i>";
  if(document.fr1.cb3.checked==true)
	x.innerHTML="<h2>"+x.outerHTML+"</h2>";
}

function oboji3()
{
    alert('ubrzano');
    setInterval("oboji4()",800);
}

function promena_slike4()
{
var a=document.getElementsByTagName("header");
var b=a[0].querySelector("img");
b.style.content="url('slike/logo6.png')"
b.style.transition = "content 1s ease-in-out";
}

setInterval("promena_slike()",200);
function promena_slike()
{
	var b=document.querySelector("header");
	var a=b.getElementsByTagName("img");
	var op=a[0].style.opacity;
	console.log('p4 '+op);
	if(op>0){
		op-=0.04;
		a[0].style.opacity=op;
	}
	else
		a[0].style.opacity=1;
	var k=a[0].style.zIndex;
	a[0].style.zIndex=a[1].style.zIndex;
	a[1].style.zIndex=k;
	k=a[0];
	a[0]=a[1];
	a[1]=k;
}








