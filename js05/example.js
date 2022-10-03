var list = document.getElementsByTagName('ul')[0];
var newItemlast =document.createElement('li');
var newtextlast = document.createTextNode('cream');
newItemlast.appendChild(newtextlast);
list.appendChild(newtextlast);
var newItemFirst = document.createElement('li');
var newtextFirst = document.createTextNode('kale');
newtextFirst.appendChild(newtextlast);
list.insertBefore(newtextlast,list.firstChild);
var listItems = document