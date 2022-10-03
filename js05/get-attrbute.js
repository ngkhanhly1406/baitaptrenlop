var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')){
    var el = document.getElementById('scriptresults');
    el.innerHTML = '<p> the first item has a class name: ' + attr + '</p>';
}