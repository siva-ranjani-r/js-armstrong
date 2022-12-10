var input=document.createElement("input");
document.body.appendChild(input);
input.setAttribute("id","num");
input.style.border="2px solid black";
input.style.backgroundColor="lightgreen";
input.setAttribute("placeholder","enter number :");


var check_element=document.createElement("button")
document.body.appendChild(check_element);
check_element.innerHTML="check";
check_element.setAttribute("type","button");
check_element.style.backgroundColor="pink";
check_element.style.border="2px solid black";
check_element.style.margin="50px";
check_element.onclick=function()
{
var number=document.getElementById("num").value;
var sum=0;
var temp=number;
var a=number;
var count=0;
while(a>0)
{
var rem=a%10;
a=parseInt(a-rem)/10;
count++;
}
while(number>0){
	digit=number%10
	digit1=digit**count
	sum+=digit1;
	number=(number-digit)/10
}
if(temp==sum)
{
	document.write("It is amstrong number")
}
else
{
	document.write("It is not amstrong number")
}
}