var firstItem = document.getElementById('one');
var showtextcontent = firstItem.textContent;
var showInnerText = firstItem.innerText;
var msg = '<p>textcontent: '+showtextcontent + '</p>';
    msg += '<p>innertext:' +showInnerText + '</p>';
    var el = document.getElementById('scripresults');
    el.innerHTML = msg;
    firstItem.textContent = 'sourdough bread';