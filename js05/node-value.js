var itemtwo = document.getElementById('two');
var eltext = itemtwo.firstChild.nodeValue;
eltext = eltext.replace('pine nuts', 'kale');
itemtwo.firstChild.nodeValue = eltext;