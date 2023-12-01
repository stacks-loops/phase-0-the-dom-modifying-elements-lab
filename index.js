// Write your code here!
/*const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");

for (let i=0; i < 3; i++) {
    const li = document.createElement("li");
    li.context = (i +1).toString();
    ul.append(li);

}
element.append(ul);
*/

const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "Parker is the champion"; 
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = 'Parker is the champion'; 
newHeader.id = 'victory';