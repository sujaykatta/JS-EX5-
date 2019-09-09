const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
document.body.addEventListener( 'click', function ( event ) {
   if( event.srcElement.id == 'com1' ) {
    
   }
  if( event.srcElement.id == 'com' ) {
    const li3 = document.createElement("input");
 const li4 = document.createElement("br");

    const li5 = document.createElement("button");
   li5.id = "com1";
    li5.style.cssText = '  border: none;    padding: 6px 10px;  text-align: center;  text-decoration: none;  display: inline-block;  font-size: 12px;  margin: 4px 2px;';
     li5.textContent = "submit";
    document.getElementById("demo1").appendChild(li4);  
    document.getElementById("demo1").appendChild(li3);  
    document.getElementById("demo1").appendChild(li5);  
    // someFunc(li3);
  }
} );
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement("p");
  li.textContent = text;
  document.getElementById("demo1").appendChild(li);
  comment1();
  
}
const liMaker1 = (text) => {
  const li = document.createElement("p");
  li.textContent = text;
  li.appendChild(li);

}
function someFunc(text){
    const li3 = document.createElement("p");
    li3.textContent = text;
    document.getElementById("demo1").appendChild(li3);
    
  // comment1();P{P}
}
 function comment1(){
   const li2 = document.createElement("button");
   li2.id = "com";

    li2.style.cssText = '  border: none;    padding: 6px 10px;  text-align: center;  text-decoration: none;  display: inline-block;  font-size: 12px;  margin: 4px 2px;';
     li2.textContent = "comment";
   document.getElementById("demo1").appendChild(li2);

 }
  function onbuttonclick(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
    console.log("dd")
  };
// a.addEventListener('submit', function (e) {
  
// });

data.forEach(item => {
  liMaker(item);
});
 function onbuttonclick1(){
// button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
};